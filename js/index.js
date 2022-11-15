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

    //scroll event


    let windowSize = $(window).height();
    console.log(windowSize);

    $(window).scroll(function () { 
        let scrollPosition = $(this).scrollTop();
        // console.log(scrollPosition);

            var offset = $("#card1").offset();
            var top = offset.top;
            
            if(scrollPosition > top - windowSize + 100){
                $("#card1 img:nth-of-type(1)").addClass("left_In");
                $("#card1 img:nth-of-type(2)").addClass("center_In");
                $("#card1 img:nth-of-type(3)").addClass("r_In");
            }
    });
    $(window).scroll(function () { 
        let scrollPosition = $(this).scrollTop();
        // console.log(scrollPosition);

            var offset = $("#card2").offset();
            var top = offset.top;
            
            if(scrollPosition > top - windowSize + 100){
                $("#card2 img:nth-of-type(1)").addClass("left_In");
                $("#card2 img:nth-of-type(2)").addClass("center_In");
                $("#card2 img:nth-of-type(3)").addClass("r_In");
            }
    });
    $(window).scroll(function () { 
        let scrollPosition = $(this).scrollTop();
        // console.log(scrollPosition);

            var offset = $("#card3").offset();
            var top = offset.top;
            
            if(scrollPosition > top - windowSize + 100){
                $("#card3 img:nth-of-type(1)").addClass("left_In");
                $("#card3 img:nth-of-type(2)").addClass("center_In");
                $("#card3 img:nth-of-type(3)").addClass("r_In");
            }
    });
    // scrollevent2 inview
    $(".visible").on("inview",function(event,isInView){
        if(isInView){
            $(this).addClass("visible_blur")
        }else{

        }
    });
    


    //googlemap resize
    // let win_width = $(window).width();
    // if(win_width <= 1024){
    //     $("#g_map").prop({
    //         "width":"300",
    //         "height":"213"
    //     })
    // }
})