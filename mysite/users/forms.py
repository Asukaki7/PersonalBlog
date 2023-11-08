from django import forms
from django.contrib.auth.models import User


class LoginForm(forms.Form):
    username = forms.CharField(label='username', max_length=32, widget=forms.EmailInput(attrs={
        'class': 'input', 'placeholder': 'Username/email'
    }))
    password = forms.CharField(label='password', min_length=6, widget=forms.PasswordInput(attrs={
        'class': 'input', 'placeholder': 'password'
    }))

    def clean_password(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        return password


# 注册表单
class RegisterForm(forms.ModelForm):
    email = forms.EmailField(label='email', max_length=32, widget=forms.EmailInput(attrs={
        'class': 'input', 'placeholder': 'Username/email'
    }))
    password = forms.CharField(label='password', min_length=6, widget=forms.PasswordInput(attrs={
        'class': 'input', 'placeholder': 'password'
    }))
    password1 = forms.CharField(label='password again', min_length=6, widget=forms.PasswordInput(attrs={
        'class': 'input', 'placeholder': 'password'
    }))

    class Meta:
        model = User
        fields = ('email', 'password')

    def clean_email(self):
        email = self.cleaned_data.get('email')
        exists = User.objects.filter(email=email).exists()
        if exists:
            raise forms.ValidationError("用户名已经存在！")
        return email

    def clean_password1(self):
        if self.cleaned_data['password'] != self.cleaned_data['password1']:
            raise forms.ValidationError('两次输入不一致，请重新修改')
        return self.cleaned_data['password1']


"""填写email表单页面"""
class ForgetPwdForm(forms.Form):
    email = forms.EmailField(label='plz enter your email', min_length=4, widget=forms.EmailInput(attrs={
        'class': 'input', 'placeholder': '用户名/邮箱'
    }))

"""修改密码表单"""
class ModifyPwdForm(forms.Form):
    password = forms.CharField(label="plz enter new password", min_length=6,
                               widget=forms.PasswordInput(
                                   attrs={'class': 'input', 'placeholder': 'enter new password'}))
