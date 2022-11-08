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

})