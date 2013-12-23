/*
   Little snippet to make IPython notebook output cells alternate
   between hidden and visible states.
*/  

$(document).ready(function(){
  $(".input").click(function(){
      $(this).next('.output_hidden').slideToggle();            
  });
})

//  We wait for the onload function to load MathJax after the page is completely loaded.  
//  MathJax is loaded 1 unit of time after the page is ready.
//  This hack prevent problems when you use social button from addthis.
//
window.onload = function () {
  setTimeout(function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src  = "https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS_HTML";
    document.getElementsByTagName("head")[0].appendChild(script);
  },1)
}