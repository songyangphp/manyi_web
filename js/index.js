$(function(){
    /*合作伙伴 鼠标划过效果*/
    $(".part_6_content_img img").mouseenter(function (){
        var real_img = $(this).attr("real_img");
        var img_src = $(this).attr("src");
        $(this).attr("src",real_img)
        $(this).attr("real_img",img_src)
    }).mouseleave(function (){
        var real_img = $(this).attr("real_img");
        var img_src = $(this).attr("src");
        $(this).attr("src",real_img)
        $(this).attr("real_img",img_src)
    })


    /*主要项目 切换效果*/
    $(".part_3_nav ul li").mouseenter(function (){
        $(this).addClass("part_3_nav_active").siblings().removeClass('part_3_nav_active')
        $(".part_3_content_left_top").eq($(this).index()).stop().fadeIn().siblings().hide()
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
})