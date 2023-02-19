//use strict
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  $(function() {
    $('.select-style').styler();
  });

  $(function(){
    $('.testimonials__slider').slick({
      dots: false,
      arrows: true,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
       prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8.5L8 1.5L15 8.5" stroke="#3E2E4D" stroke-width="2" stroke-linecap="round"/></svg> </button>',
       nextArrow: '<button type="button" class="slick-next">  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 8L15 1" stroke="#3E2E4D" stroke-width="2" stroke-linecap="round"/></svg></button>',

    }); 
  }) 
