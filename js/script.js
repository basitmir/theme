$(function(){


    new WOW().init();
   $(".face img").hover(function(){
      $(this).toggleClass("zoom");
   });
   
   $('.counter').counterUp({
      delay: 10,
      time: 2000
  });
});