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
		hide();
	} if (house.checked) {
		window.location.href = "quiz.html#step2";
		hide();
	} else if (split.checked) {
		window.location.href = "quiz.html#step8";
		hide();
	} else if (other.checked) {
		window.location.href = "quiz.html#step4";
		hide();
	}
}

function step2() {
	var waterfordY = document.querySelector("#waterfordYes");
	var waterfordN = document.querySelector("#waterfordNo");

	if (waterfordY.checked) {
		window.location.href = "quiz.html#step3";
		hide();
	} else if (waterfordN.checked) {
		window.location.href = "quiz.html#step4";
		hide();
	}
}

function step3() {
	var lakeY = document.querySelector("#lakeYes");
	var lakeN = document.querySelector("#lakeNo");

	if (lakeY.checked) {
		window.location.href = "quiz.html#step6";
		hide();
	} else if (lakeN.checked) {
		window.location.href = "quiz.html#step5";
		hide();
	}
}

function step4() {
	var topoY = document.querySelector("#topoYes");
	var topoN = document.querySelector("#topoNo");
	var topoI = document.querySelector("#idk")

	if (topoY.checked) {
		window.location.href = "quiz.html#step6";
		hide();
	} else if (topoN.checked) {
		window.location.href = "quiz.html#step5";
		hide();
	} else if (topoI.checked) {
		window.location.href = "quiz.html#step7";
		hide();
	}
}

// Loops through all the span elements, checks its ID with the current step from the URL and shows the current step but hides the rest by attaching the "hide" class.

function hide() {
	let span = document.querySelectorAll("span");

	for (var i = 0; i < span.length; i++) {
		
		let current = window.location.href.slice(-5);
		
		if (span[i].id == current) {
			span[i].classList.remove("hide");
		} else {
				span[i].classList.add("hide");
		}
	}
}


// Resets the URL if the page is reloaded. Just ensures that nothing but the first question will display

if (performance.navigation.type == 1) {
	window.location.href = "quiz.html";
}