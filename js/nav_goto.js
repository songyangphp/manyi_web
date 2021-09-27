$(function (){
    /*导航的跳转*/
    $(".nav ul li").click(function (){
        var href = $(this).attr("href")
        if(href !== undefined && href !== ''){
            window.location.href = href
        }
    })
})