var button1 = document.querySelector("#step1Button");
var button2 = document.querySelector("#step2Button");
var button3 = document.querySelector("#step3Button");
var button4 = document.querySelector("#step4Button");

button1.addEventListener("click", step1, false);
button2.addEventListener("click", step2, false);
button3.addEventListener("click", step3, false);
button4.addEventListener("click", step4, false);

function step1() {
	var lines = document.querySelector("#lines");
	var fence = document.querySelector("#fence");
	var house = document.querySelector("#house");
	var split = document.querySelector("#split");
	var other = document.querySelector("#other");
	
	if (lines.checked || fence.checked) {
		window.location.href = "quiz.html#step5";
	} if (house.checked) {
		window.location.href = "quiz.html#step2";
	} else if (split.checked) {
		window.location.href = "quiz.html#step8";
	} else if (other.checked) {
		window.location.href = "quiz.html#step4";
	}
}

function step2() {
	var waterfordY = document.querySelector("#waterfordYes");
	var waterfordN = document.querySelector("#waterfordNo");

	if (waterfordY.checked) {
		window.location.href = "quiz.html#step3";
	} else if (waterfordN.checked) {
		window.location.href = "quiz.html#step4";
	}
}

function step3() {
	var lakeY = document.querySelector("#lakeYes");
	var lakeN = document.querySelector("#lakeNo");

	if (lakeY.checked) {
		window.location.href = "quiz.html#step6";
	} else if (lakeN.checked) {
		window.location.href = "quiz.html#step5";
	}
}

function step4() {
	var topoY = document.querySelector("#topoYes");
	var topoN = document.querySelector("#topoNo");
	var topoI = document.querySelector("#idk")

	if (topoY.checked) {
		window.location.href = "quiz.html#step6";
	} else if (topoN.checked) {
		window.location.href = "quiz.html#step5";
	} else if (topoI.checked) {
		window.location.href = "quiz.html#step7";
	}
}