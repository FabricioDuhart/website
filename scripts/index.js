let currentSection = "";
$("#aboutBtn").on("click", function(){
    $(".greetings.section").css("animation", "2s slide-out");
    $(".about.section").css("animation", "1s slide-in");
    currentSection =".about";

    setTimeout(function(){
        $(".greetings.section").css("display", "none");
        $(".about.section").css("display", "flex");
    },1900);

    setTimeout(function(){
        $("#goBackBtn").fadeIn();
        
    },1900);

});

$("#workBTN").on("click", function(){
    $(".greetings.section").css("animation", "2s slide-out");
    $(".portfolio.section").css("animation", "1s slide-in");
    currentSection = ".portfolio";
    
    setTimeout(function(){
        $(".greetings.section").css("display", "none");
        $(".portfolio.section").css("display", "flex");
    }, 1900);
    setTimeout(function(){
        $("#goBackBtn").fadeIn();
        
    },1900);
});

$("#contactMeBtn").on("click", function(){
    $(".greetings.section").css("animation", "2s slide-out");
    $(".contactMe.section").css("animation", "1s slide-in");
    currentSection =".contactMe";

    setTimeout(function(){
        $(".greetings.section").css("display", "none");
        $(".contactMe.section").css("display", "flex");
    },1900);

    setTimeout(function(){
        $("#goBackBtn").fadeIn();
        
    },1900);

});

$("#goBackBtn").on("click", function(){
    $(currentSection + ".section").css("animation", "2s slide-out");
    $("footer").fadeOut();
    $(".greetings.section").css("animation", "1s slide-in");
    $("#goBackBtn").fadeOut();
    setTimeout(function(){
        $(currentSection + ".section").css("display", "none");
        $(".greetings.section").css("display", "flex");
        $("footer").fadeIn();
    }, 1900);
});

