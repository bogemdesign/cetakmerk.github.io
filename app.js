Defer(function() {
var swiper=new Swiper(".mySwiper",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:20,stretch:0,depth:200,modifier:1,slideShadows:!0},autoplay:{delay:1e3,disableOnInteraction:!1},loop:!0});let cari=document.querySelectorAll("img");cari.forEach((function(t){let e=t.getAttribute("src");t.setAttribute("data-srcset",`${e} 300w`),t.setAttribute("data-src",`${e}`),t.setAttribute("data-sizes","auto"),t.setAttribute("class","lazyload"),t.setAttribute("loading","lazy")}));
Defer.dom('img .lazyloaded', 200, 'loaded');
})
