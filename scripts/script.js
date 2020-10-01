/* STICKY HEADER, bron: https://www.w3schools.com/howto/howto_js_sticky_header.asp */

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


/* hamburgermenu */

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("uitklap").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
    
    
}
