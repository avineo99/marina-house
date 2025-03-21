$(document).ready(function () { 
    $(".toggle").click(function () {
      $("body").addClass("menuToggle");
    });
    $(".close, .menuOverlay").click(function () {
      $("body").removeClass("menuToggle");
    });
  
  });





