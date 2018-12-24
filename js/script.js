$(function(){
   
     
    new WOW().init();
   $(".face img").hover(function(){
      $(this).toggleClass("zoom");
   });
});