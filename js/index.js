$(function(){
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


    $(".part_3_nav ul li").mouseenter(function (){
        $(this).addClass("part_3_nav_active").siblings().removeClass('part_3_nav_active')
        $(".part_3_content_left_top").eq($(this).index()).stop().fadeIn().siblings().stop().hide()
    })
})