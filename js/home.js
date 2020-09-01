let cta = document.querySelectorAll('.cta');

let phone = document.createElement('a');
phone.href = "tel:248-623-1518";
phone.textContent = "Call"

let or = document.createElement('span');
or.textContent = " or ";

let contactForm = document.createElement('a');
contactForm.href = "contact.html";
contactForm.textContent = "Email us"

function addContactInfo(e) {
	let button = e.srcElement;
	button.textContent = '';
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		button.appendChild(phone);
		button.appendChild(or);
	}
	button.appendChild(contactForm);
}

function revertText(e) {
	e.srcElement.textContent = 'Get an Estimate';
}

// TODO: Revert text after contact info is shown for 3 seconds
for (let i = 0; i < cta.length; i++) {
	cta[i].addEventListener('click', (e) => {
		addContactInfo(e);
	});
	cta[i].addEventListener('mouseleave', (e) => {
		revertText(e);
	});
}