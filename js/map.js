let map;

function initMap() {
	let business = {lat: 42.698124, lng: -83.408911};
	map = new google.maps.Map(document.getElementById('map'), {
		center: business,
		zoom: 18
	});
	let marker = new google.maps.Marker({position: business, map: map})
}