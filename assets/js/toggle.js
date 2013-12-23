/*
   Little snippet to make IPython notebook output cells alternate
   between hidden and visible states.
*/  

$(document).ready(function(){
  $(".input").click(function(){
      $(this).next('.output_hidden').slideToggle();            
  });
})
