"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os.path

from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from utils.upload import upload_file

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('users/', include('users.urls')),  # 使用include 引入users.url 决定的是8000/admin或者users
                  path('', include('blog.urls')),
                  path('upload/', upload_file, name='uploads')  # 上传图片
              ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)  # 配置静态文件url

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
