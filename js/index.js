$(function(){
    /*导航的跳转*/
    $(".nav ul li").click(function (){
        var href = $(this).attr("href")
        if(href !== undefined && href !== ''){
            window.location.href = href
        }
    })

    /*合作伙伴 鼠标划过效果*/
    $(".part_6_content_img img").mouseenter(function (){
        $(this).stop().addClass('animate__animated').addClass('animate__flipOutY')
        var _that = $(this)
        setTimeout(function (){
            _that.stop().removeClass('animate__animated').removeClass('animate__flipOutY')
            var real_img = _that.attr("real_img");
            var img_src = _that.attr("src");
            _that.attr("src",real_img)
            _that.attr("real_img",img_src)
        },700)
    }).mouseleave(function (){
        var real_img = $(this).attr("real_img");
        var img_src = $(this).attr("src");
        $(this).attr("src",real_img)
        $(this).attr("real_img",img_src)
    })


    /*主要项目 切换效果*/
    var show_content = 0;
    part_3_change_timer = setInterval(function (){
        show_content++;
        if(show_content === $(".part_3_nav ul li").length){
            show_content = 0
        }
        content_change(show_content)
    },3000)

    function content_change(content_index){
        $(".part_3_nav ul li").eq(content_index).addClass("part_3_nav_active").siblings().removeClass('part_3_nav_active')
        $(".part_3_content_left_top").eq(content_index).stop().fadeIn().siblings().hide()
    }
    //划过左侧导航和按钮
    $(".part_3_nav ul li,.part_3_content_left_top_button").mouseenter(function (e){
        clearInterval(part_3_change_timer)
        if($(e.currentTarget).attr('class') !== 'part_3_content_left_top_button'){
            show_content = $(this).index()
            content_change(show_content)
        }
    }).mouseleave(function (){
        part_3_change_timer = setInterval(function (){
            show_content++;
            if(show_content === $(".part_3_nav ul li").length){
                show_content = 0
            }
            content_change(show_content)
        },3000)
    })

    /*吸顶条效果*/
    $(document).scroll(function (){
        var header = $(".header")
        var header_height = header.height()
        if($(this).scrollTop() > header_height){
            header.addClass('part_1_xiding')
        }else{
            header.removeClass('part_1_xiding')
        }
    })

    /*返回顶部效果*/
    $(".dingbu").click(function (){
        dingbu_timer = setInterval(function (){
            if($(document).scrollTop() <= 0){
                clearInterval(dingbu_timer)
            }else{
                $(document).scrollTop($(document).scrollTop()-50)
            }
        })
    })

    // $(".content_fixed ul li:eq(0)").addClass("content_fixed_active")
    // $(".content_fixed ul li:eq(0)").children('img').attr("src","__INDEX__img/tt9.png")
    // $(".content_fixed ul li:eq(0)").attr("real_img","__INDEX__img/tt5.png")

    /*右侧固定条*/
    $(".content_fixed ul li:lt(4)").mouseenter(function (){
        if($(this).index() === 0){
            return;
        }
        var real_img = $(this).attr("real_img");
        $(this).attr("real_img",$(this).children('img').attr('src'))
        $(this).children("img").attr("src",real_img)

        // console.log($(this).siblings(":gt(0)"))
        $(this).addClass('content_fixed_active').siblings(":gt(0)").removeClass('content_fixed_active')
    }).mouseleave(function (){
        if($(this).index() === 0){
            return;
        }
        var real_img = $(this).attr("real_img");
        console.log(real_img)
        $(this).attr("real_img",$(this).children('img').attr('src'))
        $(this).children("img").attr("src",real_img)


        $(this).removeClass('content_fixed_active')
    })

    $(".part_5_content_right ul li").mouseenter(function (){
        $($(this)).find('.part_5_content_right_right_jiantou').stop().animate({
            'padding-left' : '0.25rem'
        })
    }).mouseleave(function (){
        $($(this)).find('.part_5_content_right_right_jiantou').stop().animate({
            'padding-left' : '0'
        })
    })

    $(".part_5_content_center ul li").mouseenter(function (){
        $($(this)).find('.part_5_content_center_bottom_jiantou').stop().animate({
            'margin-right' : '0'
        })
    }).mouseleave(function (){
        $($(this)).find('.part_5_content_center_bottom_jiantou').stop().animate({
            'margin-right' : '0.375rem'
        })
    })

    $(".part_5_content_left_img").mouseenter(function (){
        $(this).find('.part_5_content_left_img_mask_jiantou img').stop().animate({
            'margin-left' : '0.9625rem'
        })
    }).mouseleave(function (){
        $(this).find('.part_5_content_left_img_mask_jiantou img').stop().animate({
            'margin-left' : '0.7rem'
        })
    })
})