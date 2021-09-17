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
})