from django.contrib.auth.models import User
from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm, RegisterForm, ForgetPwdForm, ModifyPwdForm, UserFormProfile, UserForm
from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from .models import EmailVerifyRecord, UserProfile
from utils.email_send import send_register_email
from django.contrib.auth.hashers import make_password
from django.contrib.auth.decorators import login_required


# Create your views here.

class MyBackend(ModelBackend):
    # 邮箱登录注册
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = User.objects.get(Q(username=username) | Q(email=username))
            if user.check_password(password):
                return user
        except Exception as e:
            return None


def login_view(request):
    if request.method != 'POST':
        form = LoginForm()
    else:
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                # 登录成功之后跳转到个人中心
                return redirect('users:user_profile')
            else:
                return HttpResponse('Log in failed')
    return render(request, 'users/login.html', {'form': form})


def register(request):
    # 注册视图
    if request.method != 'POST':
        form = RegisterForm()
    else:
        form = RegisterForm(request.POST)
        if form.is_valid():
            new_user = form.save(commit=False)
            new_user.set_password(form.cleaned_data.get('password'))
            new_user.username = form.cleaned_data.get('email')
            new_user.save()

            # sendemail
            send_register_email(form.cleaned_data.get('email'), 'register')
            return HttpResponse("sign up success")
    context = {'form': form}
    return render(request, 'users/register.html', context)


def active_user(request, active_code):
    """修改用户状态，比对连接验证码"""
    all_records = EmailVerifyRecord.objects.filter(code=active_code)
    if all_records:
        for record in all_records:
            email = record.email
            users = User.objects.get(email=email)
            users.is_staff = True
            users.save
    else:
        return HttpResponse('link error')
    return redirect('users:login')


def forget_pwd(request):
    """忘记密码"""
    if request.method == 'GET':
        form = ForgetPwdForm()
    if request.method == 'POST':
        form = ForgetPwdForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            exists = User.objects.filter(email=email).exists()
            if exists:
                send_register_email(email, 'forget')
                return HttpResponse('Email have send plz check up')
            else:
                return HttpResponse('Email have not sign up plz sign ')

    return render(request, 'users/forget_pwd.html', {'form': form})


def forget_pwd_url(request, active_code):
    """reset 密码"""
    if request.method != 'POST':
        form = ModifyPwdForm()
    else:
        form = ModifyPwdForm(request.POST)
        if form.is_valid():
            record = EmailVerifyRecord.objects.get(code=active_code)
            email = record.email
            user = User.objects.get(email=email)
            user.username = email
            user.password = make_password(form.cleaned_data.get('password'))
            user.save()
            return HttpResponse('change success')
        else:
            return HttpResponse('change failed')

    return render(request, 'users/reset_pwd.html', {'form': form})


@login_required(login_url='users:login')
def user_profile(request):
    """个人中心"""
    user = User.objects.get(username=request.user)
    return render(request, 'users/user_profile.html', {'user': user})


def logout_view(request):
    """登出视图"""
    logout(request)
    return redirect('users:login')


@login_required(login_url='users:login')
def editor_users(request):
    """编辑用户信息"""
    # 逻辑在这里
    user = User.objects.get(id=request.user.id)

    if request.method == "POST":
        try:
            # userprofile和user之间是一对一，默认注册是没有数据的，注册成功之后他才会在个人中心设置信息
            user_profile = user.userprofile
            form = UserForm(request.POST, instance=user)  # 保存加修改,instance默认显示他原有的数据
            user_profile_form = UserFormProfile(request.POST, request.FILES, instance=user_profile)
            if form.is_valid() and user_profile_form.is_valid():
                form.save()
                user_profile_form.save()
                return redirect("users:user_profile")

        except UserProfile.DoesNotExist:
            form = UserForm(request.POST, instance=user)
            user_profile_form = UserFormProfile(request.POST, request.FILES)
            if form.is_valid() and user_profile_form.is_valid():
                form.save()
                new_uer_profile = user_profile_form.save(commit=False)
                new_uer_profile.owner = request.user
                new_uer_profile.save()

                return redirect("users:user_profile")

    else:
        try:
            user_profile = user.userprofile
            form = UserForm(instance=user)  # 保存加修改,instance默认显示他原有的数据
            user_profile_form = UserFormProfile(instance=user_profile)

        except UserProfile.DoesNotExist:
            form = UserForm(instance=user)
            user_profile_form = UserFormProfile()

    return render(request, 'users/editor_users.html',locals())
