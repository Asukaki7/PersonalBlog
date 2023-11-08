from users.models import EmailVerifyRecord
from django.core.mail import send_mail
import random
import string


def random_str(randomLength=8):
    """生成八位数随机字符串"""
    chars = string.ascii_letters + string.digits  # 生成a-zA-Z0-9字符串
    strcode = ''.join(random.sample(chars, randomLength))
    return strcode


def send_register_email(email, send_type='register'):
    email_record = EmailVerifyRecord()
    code = random_str()
    email_record.code = code
    email_record.email = email
    email_record.send_type = send_type
    email_record.save()

    if send_type == 'register':
        email_title = 'blog active link'
        email_body = 'plz click th link to active account:http://127.0.0.1:8000/users/active/{0}'.format(code)

        send_statue = send_mail(email_title, email_body, '1257591579@qq.com', [email])

        if send_statue:
            pass

    elif send_type == 'forget':
        email_title = 'reset pwd'
        email_body = 'plz click th link to change password:http://127.0.0.1:8000/users/forget_pwd_url/{0}'.format(code)

        send_statue = send_mail(email_title, email_body, '1257591579@qq.com', [email])

        if send_statue:
            pass
