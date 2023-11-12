from django.shortcuts import render, get_object_or_404
from .models import Category, Tag, Post


# Create your views here.


def index(request):
    # 查询首页数据并显示在页面

    post_list = Post.objects.all()  # 查询到所有的文章
    context = {'post_list': post_list}

    return render(request, 'blog/index.html', context)


def category_list(request, category_id):
    category = get_object_or_404(Category, id=category_id)
    # 获取当前分类下的所有模型
    posts = category.post_set.all()
    context = {'category': category, 'posts_list': posts}
    return render(request, 'blog/list.html', context)


def post_detail(request, post_id):
    # 文章详情页
    post = get_object_or_404(Post, id=post_id)

    prev_post = Post.objects.filter(id__lt=post_id).last()  # 上一篇queryset
    next_post = Post.objects.filter(id__gt=post_id).first()  # 下一篇queryset

    context = {'post': post, 'prev_post': prev_post, 'next_post': next_post}
    return render(request, 'blog/detail.html', context)
