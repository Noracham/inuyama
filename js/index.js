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

    // アニメーションの配列
    sideFadeInAnimation = [
        "#card1",
        "#card2",
        "#card3"
    ]

    $(window).scroll(function () { 
        let scrollPosition = $(this).scrollTop();
        // console.log(scrollPosition);

            var offset = $("#card1").offset();
            var top = offset.top;
            
            if(scrollPosition > top - windowSize + 300){
                $("#card1 img:nth-of-type(1)").addClass("left_In")
                $("#card1 img:nth-of-type(3)").addClass("In")
            }
    });

})