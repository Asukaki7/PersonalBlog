from django.urls import path
from . import views

app_name = 'users' #定义命名空间，区分不同应用的连接地址


urlpatterns = [
    path('login.html', views.login_view, name='login')
]
