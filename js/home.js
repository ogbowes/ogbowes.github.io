let cta = document.querySelectorAll('.cta');

let phone = document.createElement('a');
phone.href = "tel:248-623-1518";

let separator = document.createElement('span');
separator.innerText = ' | ';

let contactForm = document.createElement('a');
contactForm.href = "contact.html"; 

function displayContactInfo(e) {
	let button = e.srcElement;
	phone.classList.add('phoneInfo');
	contactForm.classList.add('emailInfo')
	button.innerText = '';
	if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
		phone.textContent = " 248-623-1518";
		contactForm.textContent = " Email us";
	}
	button.appendChild(phone);
	button.appendChild(separator);
	button.appendChild(contactForm);
}

function revertText(e) {
	e.textContent = 'Get an Estimate';
	e.classList.remove('phoneInfo');
	e.classList.remove('emailInfo')
}

let previousCta;

for (let i = 0; i < cta.length; i++) {
	// Display contact links when hovered
	cta[i].addEventListener('mouseenter', (e) => {
		// Reset previously hovered CTA's text when new CTA is hovered
		if (previousCta && previousCta != cta[i]) {
			revertText(previousCta);
		}
		previousCta = cta[i];

		// Timeout to prevent links being clicked when CTA is initially tapped on mobile
		setTimeout(() => displayContactInfo(e), 250);
		setTimeout(() => revertText(e.srcElement), 10000);
	})
}