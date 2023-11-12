from django.urls import path
from . import views

app_name = 'users'  # 定义命名空间，区分不同应用的连接地址

urlpatterns = [
    path('login.html', views.login_view, name='login'),
    path('register.html', views.register, name='register'),
    path('active/<active_code>', views.active_user, name='active_user'),
    path('forget_pwd.html', views.forget_pwd, name='forget_pwd'),
    path('forget_pwd_url/<active_code>', views.forget_pwd_url, name='forget_pwd_url'),
    path('user_profile.html', views.user_profile, name='user_profile'),
    path('logout/', views.logout_view, name='logout'),
    path('editor_users.html', views.editor_users, name='editor_users'), #编辑用户信息
]
