
// function nextPage(){
// document.getElementById("test").addEventListener("click", displayDate);
// }




document.getElementById("test").addEventListener("click", myFunction);

function myFunction() {
  alert ("You would now be directed to the womens page");
}


//to check for cookies
function checkCookies() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("cookies").innerHTML = text;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

setTimeout(function(){
var popup =document.getElementById("popup")
var overlay =document.getElementById("overlayforpopup")

popup.style.visibility = "visible"
overlay.style.visibility = "visible"


},2000)


var close =document.getElementById("close");
close.onclick = function(){
popup.style.visibility = "hidden"
overlayforpopup.style.visibility ="hidden"
}

var close =document.getElementById("subscribe");
close.onclick =function(){
popup.style.visibility = "hidden"
overlayforpopup.style.visibility ="hidden"
alert("You have been subscribed to my daily list.")
}