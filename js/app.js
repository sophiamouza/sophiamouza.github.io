$(document).foundation()

var button= document.querySelector(".box");

button.addEventListener("click", function(e) {
   this.classList.toggle("active"); 
});





// $(document).ready(function(){
//     var popup = new Foundation.Reveal($('#myModal'));
//     popup.open();
// });
// (function(){
 
//   $("#cart").on("click", function() {
//     $(".shopping-cart").fadeToggle( "fast");
//   });
  
// })();

// var squareEl = document.getElementById('box');
// squareEl.addEventListener('mouseover', function (e) {
//   squareEl.className = "box active";
// }, false);