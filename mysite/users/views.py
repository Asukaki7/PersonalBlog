from django.contrib.auth.models import User
from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login
from .forms import LoginForm, RegisterForm, ForgetPwdForm, ModifyPwdForm
from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from .models import EmailVerifyRecord
from utils.email_send import send_register_email
from django.contrib.auth.hashers import make_password


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
                return redirect('/admin')
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
