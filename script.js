const MODAL = document.getElementById('myModal');
const BTN = document.getElementById("myBtn");
const SPAN = document.getElementsByClassName("close")[0];
const CLOSEBTN = document.getElementById("closeBtn");

BTN.onclick = function() {
  MODAL.style.display = "block";
}

SPAN.onclick = function() {
  MODAL.style.display = "none";
}

CLOSEBTN.onclick = function() {
	MODAL.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == MODAL) {
    MODAL.style.display = "none";
  }
}

$(document).ready(function(){
  $("form").submit(function(){
    alert('This form has been submitted.');
  });
});