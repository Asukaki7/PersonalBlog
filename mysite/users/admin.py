from django.contrib import admin
from django.contrib.auth.models import User
from .models import UserProfile
# Register your models here.
from django.contrib.auth.admin import UserAdmin

# 取消关联注册
admin.site.unregister(User)


# 定义关联对象的样式
class UserProfileInline(admin.StackedInline):
    model = UserProfile


# 关联UserProfile
class UserProfileAdmin(UserAdmin):
    inlines = [UserProfileInline]


# 注册User模型
admin.site.register(User, UserProfileAdmin)
