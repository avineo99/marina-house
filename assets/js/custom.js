$(document).ready(function () { 
    $(".toggle").click(function () {
      $("body").addClass("menuToggle");
    });
    $(".close, .menuOverlay").click(function () {
      $("body").removeClass("menuToggle");
    });
  
  });


  $('.testimonial-slide').slick({
    infinite: true,
    dots: false,
    arrows: true,
  });
  


  AOS.init({
    duration: 1200,
    once: true
  });