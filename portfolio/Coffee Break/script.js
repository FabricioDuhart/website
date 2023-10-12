
window.addEventListener('scroll', () => {
    const rect = document.querySelector(".brand.banner").getBoundingClientRect();
  
    const rectBottom = rect.bottom/window.innerHeight;
    
    if(rectBottom <= 0){
        $("header").animate({opacity: 1}, 20);
    }
    else{
        $("header").animate({opacity: 0}, 20);
        $(".brand.banner").animate({opacity: (rectBottom)},0);
    }

    
});

$("#goBackBtn").on("click", function(){
    window.location.href = "../../index.html";
});