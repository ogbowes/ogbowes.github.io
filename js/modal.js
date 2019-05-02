var modal = document.getElementById('modal');
var btn = document.querySelectorAll('.cta.boxed');
var close = document.getElementsByClassName("close")[0];

[].forEach.call(btn, function(el) {
	el.onclick = function() {
		modal.style.display = "block";
	}
})
close.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}