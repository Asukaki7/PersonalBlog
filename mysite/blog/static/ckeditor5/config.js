//配置选项
$(document).ready(function () {
    ClassicEditor
        .create(document.querySelector('#id_content'), {
            //功能模块
            toolbar: {
                items: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'underline',
                    'fontColor',
                    'fontBackgroundColor',
                    'fontSize',
                    'fontFamily',
                    'highlight',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'indent',
                    'outdent',
                    '|',
                    'link',
                    'imageUpload',
                    'imageInsert',
                    'mediaEmbed',
                    '|',
                    'blockQuote',
                    'strikethrough',
                    'specialCharacters',
                    'superscript',
                    'subscript',
                    'insertTable',
                    'undo',
                    'redo',
                    'alignment'
                ],
                shouldNotGroupWhenFull: true
            },
            //设置字体大小
            fontSize: {
                options: [
                    12,
                    14,
                    16,
                    18,
                    20,
                    22,
                    24,
                    26,
                    28,
                    30,
                    32,
                    34,
                    36

                ]
            },
            //设置字体颜色
            fontColor: {
                colors: [
                    {
                        color: 'hsl(0, 0%, 0%)',
                        label: 'hsl(0, 0%, 0%)'
                    },
                    {
                        color: 'hsl(0, 0%, 12.5%)',
                        label: 'hsl(0, 0%, 12.5%)'
                    },
                    {
                        color: 'hsl(0, 0%, 25%)',
                        label: 'hsl(0, 0%, 25%)'
                    },
                    {
                        color: 'hsl(0, 0%, 37.5%)',
                        label: 'hsl(0, 0%, 37.5%)'
                    },
                    {
                        color: 'hsl(0, 0%, 50%)',
                        label: 'hsl(0, 0%, 50%)'
                    },
                    {
                        color: 'hsl(0, 0%, 62.5%)',
                        label: 'hsl(0, 0%, 62.5%)'
                    },
                    {
                        color: 'hsl(0, 0%, 75%)',
                        label: 'hsl(0, 0%, 75%)'
                    },
                    {
                        color: 'hsl(0, 0%, 87.5%)',
                        label: 'hsl(0, 0%, 87.5%)'
                    },
                    {
                        color: 'hsl(0, 0%, 100%)',
                        label: 'hsl(0, 0%, 100%)'
                    },
                    {
                        color: 'hsl(0, 100%, 10%)',
                        label: 'hsl(0, 100%, 10%)'
                    },
                    {
                        color: 'hsl(0, 100%, 20%)',
                        label: 'hsl(0, 100%, 20%)'
                    },
                    {
                        color: 'hsl(0, 100%, 30%)',
                        label: 'hsl(0, 100%, 30%)'
                    },
                    {
                        color: 'hsl(0, 100%, 40%)',
                        label: 'hsl(0, 100%, 40%)'
                    },
                    {
                        color: 'hsl(0, 100%, 50%)',
                        label: 'hsl(0, 100%, 50%)'
                    },
                    {
                        color: 'hsl(0, 100%, 60%)',
                        label: 'hsl(0, 100%, 60%)'
                    },
                    {
                        color: 'hsl(0, 100%, 70%)',
                        label: 'hsl(0, 100%, 70%)'
                    },
                    {
                        color: 'hsl(0, 100%, 80%)',
                        label: 'hsl(0, 100%, 80%)'
                    },
                    {
                        color: 'hsl(0, 100%, 90%)',
                        label: 'hsl(0, 100%, 90%)'
                    },
                    {
                        color: 'hsl(30, 100%, 10%)',
                        label: 'hsl(30, 100%, 10%)'
                    },
                    {
                        color: 'hsl(30, 100%, 20%)',
                        label: 'hsl(30, 100%, 20%)'
                    },
                    {
                        color: 'hsl(30, 100%, 30%)',
                        label: 'hsl(30, 100%, 30%)'
                    },
                    {
                        color: 'hsl(30, 100%, 40%)',
                        label: 'hsl(30, 100%, 40%)'
                    },
                    {
                        color: 'hsl(30, 100%, 50%)',
                        label: 'hsl(30, 100%, 50%)'
                    },
                    {
                        color: 'hsl(30, 100%, 60%)',
                        label: 'hsl(30, 100%, 60%)'
                    },
                    {
                        color: 'hsl(30, 100%, 70%)',
                        label: 'hsl(30, 100%, 70%)'
                    },
                    {
                        color: 'hsl(30, 100%, 80%)',
                        label: 'hsl(30, 100%, 80%)'
                    },
                    {
                        color: 'hsl(30, 100%, 90%)',
                        label: 'hsl(30, 100%, 90%)'
                    },
                    {
                        color: 'hsl(60, 100%, 10%)',
                        label: 'hsl(60, 100%, 10%)'
                    },
                    {
                        color: 'hsl(60, 100%, 20%)',
                        label: 'hsl(60, 100%, 20%)'
                    },
                    {
                        color: 'hsl(60, 100%, 30%)',
                        label: 'hsl(60, 100%, 30%)'
                    },
                    {
                        color: 'hsl(60, 100%, 40%)',
                        label: 'hsl(60, 100%, 40%)'
                    },
                    {
                        color: 'hsl(60, 100%, 50%)',
                        label: 'hsl(60, 100%, 50%)'
                    },
                    {
                        color: 'hsl(60, 100%, 60%)',
                        label: 'hsl(60, 100%, 60%)'
                    },
                    {
                        color: 'hsl(60, 100%, 70%)',
                        label: 'hsl(60, 100%, 70%)'
                    },
                    {
                        color: 'hsl(60, 100%, 80%)',
                        label: 'hsl(60, 100%, 80%)'
                    },
                    {
                        color: 'hsl(60, 100%, 90%)',
                        label: 'hsl(60, 100%, 90%)'
                    },
                    {
                        color: 'hsl(90, 100%, 10%)',
                        label: 'hsl(90, 100%, 10%)'
                    },
                    {
                        color: 'hsl(90, 100%, 20%)',
                        label: 'hsl(90, 100%, 20%)'
                    },
                    {
                        color: 'hsl(90, 100%, 30%)',
                        label: 'hsl(90, 100%, 30%)'
                    },
                    {
                        color: 'hsl(90, 100%, 40%)',
                        label: 'hsl(90, 100%, 40%)'
                    },
                    {
                        color: 'hsl(90, 100%, 50%)',
                        label: 'hsl(90, 100%, 50%)'
                    },
                    {
                        color: 'hsl(90, 100%, 60%)',
                        label: 'hsl(90, 100%, 60%)'
                    },
                    {
                        color: 'hsl(90, 100%, 70%)',
                        label: 'hsl(90, 100%, 70%)'
                    },
                    {
                        color: 'hsl(90, 100%, 80%)',
                        label: 'hsl(90, 100%, 80%)'
                    },
                    {
                        color: 'hsl(90, 100%, 90%)',
                        label: 'hsl(90, 100%, 90%)'
                    },
                    {
                        color: 'hsl(120, 100%, 10%)',
                        label: 'hsl(120, 100%, 10%)'
                    },
                    {
                        color: 'hsl(120, 100%, 20%)',
                        label: 'hsl(120, 100%, 20%)'
                    },
                    {
                        color: 'hsl(120, 100%, 30%)',
                        label: 'hsl(120, 100%, 30%)'
                    },
                    {
                        color: 'hsl(120, 100%, 40%)',
                        label: 'hsl(120, 100%, 40%)'
                    },
                    {
                        color: 'hsl(120, 100%, 50%)',
                        label: 'hsl(120, 100%, 50%)'
                    },
                    {
                        color: 'hsl(120, 100%, 60%)',
                        label: 'hsl(120, 100%, 60%)'
                    },
                    {
                        color: 'hsl(120, 100%, 70%)',
                        label: 'hsl(120, 100%, 70%)'
                    },
                    {
                        color: 'hsl(120, 100%, 80%)',
                        label: 'hsl(120, 100%, 80%)'
                    },
                    {
                        color: 'hsl(120, 100%, 90%)',
                        label: 'hsl(120, 100%, 90%)'
                    },
                    {
                        color: 'hsl(150, 100%, 10%)',
                        label: 'hsl(150, 100%, 10%)'
                    },
                    {
                        color: 'hsl(150, 100%, 20%)',
                        label: 'hsl(150, 100%, 20%)'
                    },
                    {
                        color: 'hsl(150, 100%, 30%)',
                        label: 'hsl(150, 100%, 30%)'
                    },
                    {
                        color: 'hsl(150, 100%, 40%)',
                        label: 'hsl(150, 100%, 40%)'
                    },
                    {
                        color: 'hsl(150, 100%, 50%)',
                        label: 'hsl(150, 100%, 50%)'
                    },
                    {
                        color: 'hsl(150, 100%, 60%)',
                        label: 'hsl(150, 100%, 60%)'
                    },
                    {
                        color: 'hsl(150, 100%, 70%)',
                        label: 'hsl(150, 100%, 70%)'
                    },
                    {
                        color: 'hsl(150, 100%, 80%)',
                        label: 'hsl(150, 100%, 80%)'
                    },
                    {
                        color: 'hsl(150, 100%, 90%)',
                        label: 'hsl(150, 100%, 90%)'
                    },
                    {
                        color: 'hsl(180, 100%, 10%)',
                        label: 'hsl(180, 100%, 10%)'
                    },
                    {
                        color: 'hsl(180, 100%, 20%)',
                        label: 'hsl(180, 100%, 20%)'
                    },
                    {
                        color: 'hsl(180, 100%, 30%)',
                        label: 'hsl(180, 100%, 30%)'
                    },
                    {
                        color: 'hsl(180, 100%, 40%)',
                        label: 'hsl(180, 100%, 40%)'
                    },
                    {
                        color: 'hsl(180, 100%, 50%)',
                        label: 'hsl(180, 100%, 50%)'
                    },
                    {
                        color: 'hsl(180, 100%, 60%)',
                        label: 'hsl(180, 100%, 60%)'
                    },
                    {
                        color: 'hsl(180, 100%, 70%)',
                        label: 'hsl(180, 100%, 70%)'
                    },
                    {
                        color: 'hsl(180, 100%, 80%)',
                        label: 'hsl(180, 100%, 80%)'
                    },
                    {
                        color: 'hsl(180, 100%, 90%)',
                        label: 'hsl(180, 100%, 90%)'
                    },
                    {
                        color: 'hsl(210, 100%, 10%)',
                        label: 'hsl(210, 100%, 10%)'
                    },
                    {
                        color: 'hsl(210, 100%, 20%)',
                        label: 'hsl(210, 100%, 20%)'
                    },
                    {
                        color: 'hsl(210, 100%, 30%)',
                        label: 'hsl(210, 100%, 30%)'
                    },
                    {
                        color: 'hsl(210, 100%, 40%)',
                        label: 'hsl(210, 100%, 40%)'
                    },
                    {
                        color: 'hsl(210, 100%, 50%)',
                        label: 'hsl(210, 100%, 50%)'
                    },
                    {
                        color: 'hsl(210, 100%, 60%)',
                        label: 'hsl(210, 100%, 60%)'
                    },
                    {
                        color: 'hsl(210, 100%, 70%)',
                        label: 'hsl(210, 100%, 70%)'
                    },
                    {
                        color: 'hsl(210, 100%, 80%)',
                        label: 'hsl(210, 100%, 80%)'
                    },
                    {
                        color: 'hsl(210, 100%, 90%)',
                        label: 'hsl(210, 100%, 90%)'
                    },
                    {
                        color: 'hsl(240, 100%, 10%)',
                        label: 'hsl(240, 100%, 10%)'
                    },
                    {
                        color: 'hsl(240, 100%, 20%)',
                        label: 'hsl(240, 100%, 20%)'
                    },
                    {
                        color: 'hsl(240, 100%, 30%)',
                        label: 'hsl(240, 100%, 30%)'
                    },
                    {
                        color: 'hsl(240, 100%, 40%)',
                        label: 'hsl(240, 100%, 40%)'
                    },
                    {
                        color: 'hsl(240, 100%, 50%)',
                        label: 'hsl(240, 100%, 50%)'
                    },
                    {
                        color: 'hsl(240, 100%, 60%)',
                        label: 'hsl(240, 100%, 60%)'
                    },
                    {
                        color: 'hsl(240, 100%, 70%)',
                        label: 'hsl(240, 100%, 70%)'
                    },
                    {
                        color: 'hsl(240, 100%, 80%)',
                        label: 'hsl(240, 100%, 80%)'
                    },
                    {
                        color: 'hsl(240, 100%, 90%)',
                        label: 'hsl(240, 100%, 90%)'
                    },
                    {
                        color: 'hsl(270, 100%, 10%)',
                        label: 'hsl(270, 100%, 10%)'
                    },
                    {
                        color: 'hsl(270, 100%, 20%)',
                        label: 'hsl(270, 100%, 20%)'
                    },
                    {
                        color: 'hsl(270, 100%, 30%)',
                        label: 'hsl(270, 100%, 30%)'
                    },
                    {
                        color: 'hsl(270, 100%, 40%)',
                        label: 'hsl(270, 100%, 40%)'
                    },
                    {
                        color: 'hsl(270, 100%, 50%)',
                        label: 'hsl(270, 100%, 50%)'
                    },
                    {
                        color: 'hsl(270, 100%, 60%)',
                        label: 'hsl(270, 100%, 60%)'
                    },
                    {
                        color: 'hsl(270, 100%, 70%)',
                        label: 'hsl(270, 100%, 70%)'
                    },
                    {
                        color: 'hsl(270, 100%, 80%)',
                        label: 'hsl(270, 100%, 80%)'
                    },
                    {
                        color: 'hsl(270, 100%, 90%)',
                        label: 'hsl(270, 100%, 90%)'
                    },
                    {
                        color: 'hsl(300, 100%, 10%)',
                        label: 'hsl(300, 100%, 10%)'
                    },
                    {
                        color: 'hsl(300, 100%, 20%)',
                        label: 'hsl(300, 100%, 20%)'
                    },
                    {
                        color: 'hsl(300, 100%, 30%)',
                        label: 'hsl(300, 100%, 30%)'
                    },
                    {
                        color: 'hsl(300, 100%, 40%)',
                        label: 'hsl(300, 100%, 40%)'
                    },
                    {
                        color: 'hsl(300, 100%, 50%)',
                        label: 'hsl(300, 100%, 50%)'
                    },
                    {
                        color: 'hsl(300, 100%, 60%)',
                        label: 'hsl(300, 100%, 60%)'
                    },
                    {
                        color: 'hsl(300, 100%, 70%)',
                        label: 'hsl(300, 100%, 70%)'
                    },
                    {
                        color: 'hsl(300, 100%, 80%)',
                        label: 'hsl(300, 100%, 80%)'
                    },
                    {
                        color: 'hsl(300, 100%, 90%)',
                        label: 'hsl(300, 100%, 90%)'
                    },
                    {
                        color: 'hsl(330, 100%, 10%)',
                        label: 'hsl(330, 100%, 10%)'
                    },
                    {
                        color: 'hsl(330, 100%, 20%)',
                        label: 'hsl(330, 100%, 20%)'
                    },
                    {
                        color: 'hsl(330, 100%, 30%)',
                        label: 'hsl(330, 100%, 30%)'
                    },
                    {
                        color: 'hsl(330, 100%, 40%)',
                        label: 'hsl(330, 100%, 40%)'
                    },
                    {
                        color: 'hsl(330, 100%, 50%)',
                        label: 'hsl(330, 100%, 50%)'
                    },
                    {
                        color: 'hsl(330, 100%, 60%)',
                        label: 'hsl(330, 100%, 60%)'
                    },
                    {
                        color: 'hsl(330, 100%, 70%)',
                        label: 'hsl(330, 100%, 70%)'
                    },
                    {
                        color: 'hsl(330, 100%, 80%)',
                        label: 'hsl(330, 100%, 80%)'
                    },
                    {
                        color: 'hsl(330, 100%, 90%)',
                        label: 'hsl(330, 100%, 90%)'
                    },
                ],
                //列
                columns: 9,
            },
            //设置字体背景颜色
            fontBackgroundColor: {
                colors: [
                    {
                        color: 'hsl(0, 0%, 0%)',
                        label: 'hsl(0, 0%, 0%)'
                    },
                    {
                        color: 'hsl(0, 0%, 12.5%)',
                        label: 'hsl(0, 0%, 12.5%)'
                    },
                    {
                        color: 'hsl(0, 0%, 25%)',
                        label: 'hsl(0, 0%, 25%)'
                    },
                    {
                        color: 'hsl(0, 0%, 37.5%)',
                        label: 'hsl(0, 0%, 37.5%)'
                    },
                    {
                        color: 'hsl(0, 0%, 50%)',
                        label: 'hsl(0, 0%, 50%)'
                    },
                    {
                        color: 'hsl(0, 0%, 62.5%)',
                        label: 'hsl(0, 0%, 62.5%)'
                    },
                    {
                        color: 'hsl(0, 0%, 75%)',
                        label: 'hsl(0, 0%, 75%)'
                    },
                    {
                        color: 'hsl(0, 0%, 87.5%)',
                        label: 'hsl(0, 0%, 87.5%)'
                    },
                    {
                        color: 'hsl(0, 0%, 100%)',
                        label: 'hsl(0, 0%, 100%)'
                    },
                    {
                        color: 'hsl(0, 100%, 10%)',
                        label: 'hsl(0, 100%, 10%)'
                    },
                    {
                        color: 'hsl(0, 100%, 20%)',
                        label: 'hsl(0, 100%, 20%)'
                    },
                    {
                        color: 'hsl(0, 100%, 30%)',
                        label: 'hsl(0, 100%, 30%)'
                    },
                    {
                        color: 'hsl(0, 100%, 40%)',
                        label: 'hsl(0, 100%, 40%)'
                    },
                    {
                        color: 'hsl(0, 100%, 50%)',
                        label: 'hsl(0, 100%, 50%)'
                    },
                    {
                        color: 'hsl(0, 100%, 60%)',
                        label: 'hsl(0, 100%, 60%)'
                    },
                    {
                        color: 'hsl(0, 100%, 70%)',
                        label: 'hsl(0, 100%, 70%)'
                    },
                    {
                        color: 'hsl(0, 100%, 80%)',
                        label: 'hsl(0, 100%, 80%)'
                    },
                    {
                        color: 'hsl(0, 100%, 90%)',
                        label: 'hsl(0, 100%, 90%)'
                    },
                    {
                        color: 'hsl(30, 100%, 10%)',
                        label: 'hsl(30, 100%, 10%)'
                    },
                    {
                        color: 'hsl(30, 100%, 20%)',
                        label: 'hsl(30, 100%, 20%)'
                    },
                    {
                        color: 'hsl(30, 100%, 30%)',
                        label: 'hsl(30, 100%, 30%)'
                    },
                    {
                        color: 'hsl(30, 100%, 40%)',
                        label: 'hsl(30, 100%, 40%)'
                    },
                    {
                        color: 'hsl(30, 100%, 50%)',
                        label: 'hsl(30, 100%, 50%)'
                    },
                    {
                        color: 'hsl(30, 100%, 60%)',
                        label: 'hsl(30, 100%, 60%)'
                    },
                    {
                        color: 'hsl(30, 100%, 70%)',
                        label: 'hsl(30, 100%, 70%)'
                    },
                    {
                        color: 'hsl(30, 100%, 80%)',
                        label: 'hsl(30, 100%, 80%)'
                    },
                    {
                        color: 'hsl(30, 100%, 90%)',
                        label: 'hsl(30, 100%, 90%)'
                    },
                    {
                        color: 'hsl(60, 100%, 10%)',
                        label: 'hsl(60, 100%, 10%)'
                    },
                    {
                        color: 'hsl(60, 100%, 20%)',
                        label: 'hsl(60, 100%, 20%)'
                    },
                    {
                        color: 'hsl(60, 100%, 30%)',
                        label: 'hsl(60, 100%, 30%)'
                    },
                    {
                        color: 'hsl(60, 100%, 40%)',
                        label: 'hsl(60, 100%, 40%)'
                    },
                    {
                        color: 'hsl(60, 100%, 50%)',
                        label: 'hsl(60, 100%, 50%)'
                    },
                    {
                        color: 'hsl(60, 100%, 60%)',
                        label: 'hsl(60, 100%, 60%)'
                    },
                    {
                        color: 'hsl(60, 100%, 70%)',
                        label: 'hsl(60, 100%, 70%)'
                    },
                    {
                        color: 'hsl(60, 100%, 80%)',
                        label: 'hsl(60, 100%, 80%)'
                    },
                    {
                        color: 'hsl(60, 100%, 90%)',
                        label: 'hsl(60, 100%, 90%)'
                    },
                    {
                        color: 'hsl(90, 100%, 10%)',
                        label: 'hsl(90, 100%, 10%)'
                    },
                    {
                        color: 'hsl(90, 100%, 20%)',
                        label: 'hsl(90, 100%, 20%)'
                    },
                    {
                        color: 'hsl(90, 100%, 30%)',
                        label: 'hsl(90, 100%, 30%)'
                    },
                    {
                        color: 'hsl(90, 100%, 40%)',
                        label: 'hsl(90, 100%, 40%)'
                    },
                    {
                        color: 'hsl(90, 100%, 50%)',
                        label: 'hsl(90, 100%, 50%)'
                    },
                    {
                        color: 'hsl(90, 100%, 60%)',
                        label: 'hsl(90, 100%, 60%)'
                    },
                    {
                        color: 'hsl(90, 100%, 70%)',
                        label: 'hsl(90, 100%, 70%)'
                    },
                    {
                        color: 'hsl(90, 100%, 80%)',
                        label: 'hsl(90, 100%, 80%)'
                    },
                    {
                        color: 'hsl(90, 100%, 90%)',
                        label: 'hsl(90, 100%, 90%)'
                    },
                    {
                        color: 'hsl(120, 100%, 10%)',
                        label: 'hsl(120, 100%, 10%)'
                    },
                    {
                        color: 'hsl(120, 100%, 20%)',
                        label: 'hsl(120, 100%, 20%)'
                    },
                    {
                        color: 'hsl(120, 100%, 30%)',
                        label: 'hsl(120, 100%, 30%)'
                    },
                    {
                        color: 'hsl(120, 100%, 40%)',
                        label: 'hsl(120, 100%, 40%)'
                    },
                    {
                        color: 'hsl(120, 100%, 50%)',
                        label: 'hsl(120, 100%, 50%)'
                    },
                    {
                        color: 'hsl(120, 100%, 60%)',
                        label: 'hsl(120, 100%, 60%)'
                    },
                    {
                        color: 'hsl(120, 100%, 70%)',
                        label: 'hsl(120, 100%, 70%)'
                    },
                    {
                        color: 'hsl(120, 100%, 80%)',
                        label: 'hsl(120, 100%, 80%)'
                    },
                    {
                        color: 'hsl(120, 100%, 90%)',
                        label: 'hsl(120, 100%, 90%)'
                    },
                    {
                        color: 'hsl(150, 100%, 10%)',
                        label: 'hsl(150, 100%, 10%)'
                    },
                    {
                        color: 'hsl(150, 100%, 20%)',
                        label: 'hsl(150, 100%, 20%)'
                    },
                    {
                        color: 'hsl(150, 100%, 30%)',
                        label: 'hsl(150, 100%, 30%)'
                    },
                    {
                        color: 'hsl(150, 100%, 40%)',
                        label: 'hsl(150, 100%, 40%)'
                    },
                    {
                        color: 'hsl(150, 100%, 50%)',
                        label: 'hsl(150, 100%, 50%)'
                    },
                    {
                        color: 'hsl(150, 100%, 60%)',
                        label: 'hsl(150, 100%, 60%)'
                    },
                    {
                        color: 'hsl(150, 100%, 70%)',
                        label: 'hsl(150, 100%, 70%)'
                    },
                    {
                        color: 'hsl(150, 100%, 80%)',
                        label: 'hsl(150, 100%, 80%)'
                    },
                    {
                        color: 'hsl(150, 100%, 90%)',
                        label: 'hsl(150, 100%, 90%)'
                    },
                    {
                        color: 'hsl(180, 100%, 10%)',
                        label: 'hsl(180, 100%, 10%)'
                    },
                    {
                        color: 'hsl(180, 100%, 20%)',
                        label: 'hsl(180, 100%, 20%)'
                    },
                    {
                        color: 'hsl(180, 100%, 30%)',
                        label: 'hsl(180, 100%, 30%)'
                    },
                    {
                        color: 'hsl(180, 100%, 40%)',
                        label: 'hsl(180, 100%, 40%)'
                    },
                    {
                        color: 'hsl(180, 100%, 50%)',
                        label: 'hsl(180, 100%, 50%)'
                    },
                    {
                        color: 'hsl(180, 100%, 60%)',
                        label: 'hsl(180, 100%, 60%)'
                    },
                    {
                        color: 'hsl(180, 100%, 70%)',
                        label: 'hsl(180, 100%, 70%)'
                    },
                    {
                        color: 'hsl(180, 100%, 80%)',
                        label: 'hsl(180, 100%, 80%)'
                    },
                    {
                        color: 'hsl(180, 100%, 90%)',
                        label: 'hsl(180, 100%, 90%)'
                    },
                    {
                        color: 'hsl(210, 100%, 10%)',
                        label: 'hsl(210, 100%, 10%)'
                    },
                    {
                        color: 'hsl(210, 100%, 20%)',
                        label: 'hsl(210, 100%, 20%)'
                    },
                    {
                        color: 'hsl(210, 100%, 30%)',
                        label: 'hsl(210, 100%, 30%)'
                    },
                    {
                        color: 'hsl(210, 100%, 40%)',
                        label: 'hsl(210, 100%, 40%)'
                    },
                    {
                        color: 'hsl(210, 100%, 50%)',
                        label: 'hsl(210, 100%, 50%)'
                    },
                    {
                        color: 'hsl(210, 100%, 60%)',
                        label: 'hsl(210, 100%, 60%)'
                    },
                    {
                        color: 'hsl(210, 100%, 70%)',
                        label: 'hsl(210, 100%, 70%)'
                    },
                    {
                        color: 'hsl(210, 100%, 80%)',
                        label: 'hsl(210, 100%, 80%)'
                    },
                    {
                        color: 'hsl(210, 100%, 90%)',
                        label: 'hsl(210, 100%, 90%)'
                    },
                    {
                        color: 'hsl(240, 100%, 10%)',
                        label: 'hsl(240, 100%, 10%)'
                    },
                    {
                        color: 'hsl(240, 100%, 20%)',
                        label: 'hsl(240, 100%, 20%)'
                    },
                    {
                        color: 'hsl(240, 100%, 30%)',
                        label: 'hsl(240, 100%, 30%)'
                    },
                    {
                        color: 'hsl(240, 100%, 40%)',
                        label: 'hsl(240, 100%, 40%)'
                    },
                    {
                        color: 'hsl(240, 100%, 50%)',
                        label: 'hsl(240, 100%, 50%)'
                    },
                    {
                        color: 'hsl(240, 100%, 60%)',
                        label: 'hsl(240, 100%, 60%)'
                    },
                    {
                        color: 'hsl(240, 100%, 70%)',
                        label: 'hsl(240, 100%, 70%)'
                    },
                    {
                        color: 'hsl(240, 100%, 80%)',
                        label: 'hsl(240, 100%, 80%)'
                    },
                    {
                        color: 'hsl(240, 100%, 90%)',
                        label: 'hsl(240, 100%, 90%)'
                    },
                    {
                        color: 'hsl(270, 100%, 10%)',
                        label: 'hsl(270, 100%, 10%)'
                    },
                    {
                        color: 'hsl(270, 100%, 20%)',
                        label: 'hsl(270, 100%, 20%)'
                    },
                    {
                        color: 'hsl(270, 100%, 30%)',
                        label: 'hsl(270, 100%, 30%)'
                    },
                    {
                        color: 'hsl(270, 100%, 40%)',
                        label: 'hsl(270, 100%, 40%)'
                    },
                    {
                        color: 'hsl(270, 100%, 50%)',
                        label: 'hsl(270, 100%, 50%)'
                    },
                    {
                        color: 'hsl(270, 100%, 60%)',
                        label: 'hsl(270, 100%, 60%)'
                    },
                    {
                        color: 'hsl(270, 100%, 70%)',
                        label: 'hsl(270, 100%, 70%)'
                    },
                    {
                        color: 'hsl(270, 100%, 80%)',
                        label: 'hsl(270, 100%, 80%)'
                    },
                    {
                        color: 'hsl(270, 100%, 90%)',
                        label: 'hsl(270, 100%, 90%)'
                    },
                    {
                        color: 'hsl(300, 100%, 10%)',
                        label: 'hsl(300, 100%, 10%)'
                    },
                    {
                        color: 'hsl(300, 100%, 20%)',
                        label: 'hsl(300, 100%, 20%)'
                    },
                    {
                        color: 'hsl(300, 100%, 30%)',
                        label: 'hsl(300, 100%, 30%)'
                    },
                    {
                        color: 'hsl(300, 100%, 40%)',
                        label: 'hsl(300, 100%, 40%)'
                    },
                    {
                        color: 'hsl(300, 100%, 50%)',
                        label: 'hsl(300, 100%, 50%)'
                    },
                    {
                        color: 'hsl(300, 100%, 60%)',
                        label: 'hsl(300, 100%, 60%)'
                    },
                    {
                        color: 'hsl(300, 100%, 70%)',
                        label: 'hsl(300, 100%, 70%)'
                    },
                    {
                        color: 'hsl(300, 100%, 80%)',
                        label: 'hsl(300, 100%, 80%)'
                    },
                    {
                        color: 'hsl(300, 100%, 90%)',
                        label: 'hsl(300, 100%, 90%)'
                    },
                    {
                        color: 'hsl(330, 100%, 10%)',
                        label: 'hsl(330, 100%, 10%)'
                    },
                    {
                        color: 'hsl(330, 100%, 20%)',
                        label: 'hsl(330, 100%, 20%)'
                    },
                    {
                        color: 'hsl(330, 100%, 30%)',
                        label: 'hsl(330, 100%, 30%)'
                    },
                    {
                        color: 'hsl(330, 100%, 40%)',
                        label: 'hsl(330, 100%, 40%)'
                    },
                    {
                        color: 'hsl(330, 100%, 50%)',
                        label: 'hsl(330, 100%, 50%)'
                    },
                    {
                        color: 'hsl(330, 100%, 60%)',
                        label: 'hsl(330, 100%, 60%)'
                    },
                    {
                        color: 'hsl(330, 100%, 70%)',
                        label: 'hsl(330, 100%, 70%)'
                    },
                    {
                        color: 'hsl(330, 100%, 80%)',
                        label: 'hsl(330, 100%, 80%)'
                    },
                    {
                        color: 'hsl(330, 100%, 90%)',
                        label: 'hsl(330, 100%, 90%)'
                    },
                ],
                columns: 9,
            },
            language: 'zh-cn',
            //设置图片位置以及大小
            image: {
                styles: [
                    'alignLeft', 'alignCenter', 'alignRight'
                ],
                resizeOptions: [
                    {
                        name: 'imageResize:original',
                        label: '原版',
                        value: null
                    },
                    {
                        name: 'imageResize:50',
                        label: '50%',
                        value: '50'
                    },
                    {
                        name: 'imageResize:75',
                        label: '75%',
                        value: '75'
                    }
                ],
                toolbar: [
                    'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
                    '|',
                    'imageResize',
                    '|',
                    'imageTextAlternative'
                ]
            },
            //表格配置
            table: {
                contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells'
                ]
            },
            //访问许可证密钥
            licenseKey: '',
            //图片上传
            ckfinder: {
                uploadUrl: 'http://192.168.31.123:2000/api/Home/UploadImg'
            },
            //自定义providers,给上传的视频链接设置相应的html，让其可以正常在富文本编辑器中显示
            mediaEmbed: {
                providers: [
                    {
                        name: 'myprovider',
                        url: [
                            /^lizzy.*\.com.*\/media\/(\w+)/,
                            /^www\.lizzy.*/,
                            /^.*/
                        ],
                        html: match => {
                            //获取媒体url
                            const input = match['input'];
                            return (
                                '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 70%;">' +
                                '<video controls="controls" autoplay name="media" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;">' +
                                `<source src="${input}" type="video/mp4">` +
                                '</video>' +
                                '</div>'
                            );
                        }
                    }
                ]
            },
            //自定义字体
            fontFamily: {
                options: [
                    'default',
                    'Blackoak Std',
                    '宋体,SimSun',
                    '新宋体,NSimSun',
                    '黑体,SimHei',
                    '微软雅黑,Microsoft YaHei',
                    '楷体_GB2312,KaiTi_GB2312',
                    '隶书,LiSu',
                    '幼园,YouYuan',
                    '华文细黑,STXihei',
                    '细明体,MingLiU',
                    '新细明体,PMingLiU'
                ]
            },
        })
        .then(editor => {
            window.editor = editor;
        })
        .catch(handleSampleError);

    function handleSampleError(error) {
        const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

        const message = [
            'Oops, something went wrong!',
            `Please, report the following error on ${issueUrl} with the build id "qr080c66i641-xk29fxsim655" and the error stack trace:`
        ].join('\n');

        console.error(message);
        console.error(error);
    }


})
