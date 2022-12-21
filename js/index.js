$(function(){
    $(".openbtn").click(function(){
        $(this).toggleClass("active");
    })

    // vegas slide
    $("#slider").vegas({
        overlay:true,
        transition:"blur",
        transitionDuration:1000,
        delay:4000,
        animationDuration:10000,
        animation:"random",
        slides:[
            {src:"./img/shop1_visu1.jpeg"},
            {src:"./img/shop1_visu2.jpeg"},
            {src:"./img/shop3_visu1.jpeg"},
            {src:"./img/shop3_visu2.jpeg"}
            ],
        timer:true,
        overlay: './img/09.png'
    });

    //appeal
    $(window).on("load resize",function(){
        let n_width = $(window).width();
        console.log(n_width);
    if(n_width < 1024){
        $(".appeal_txt h1").html("<h1>犬山城下町で<br>食と遊びを届ける</h1>");
    }else{
        $(".appeal_txt h1").html("<h1>犬山城下町で食と遊びを届ける</h1>");
    }
    })

    //shops
    $(".shop:nth-of-type(even) .shop_frame").css({
        "background-color": "#000"
    }
    )
    

    // scrollevent2 inview
    $(".v_inblur").on("inview",function(event,isInView){
        if(isInView){
            $(this).addClass("visible_blur")
        }else{

        }
    });
    $(".v_inup").one("inview",function(event,isInView){
        $(this).addClass("visible_inup")
    })
    


    //googlemap resize
    // let win_width = $(window).width();
    // if(win_width <= 1024){
    //     $("#g_map").prop({
    //         "width":"300",
    //         "height":"213"
    //     })
    // }
})