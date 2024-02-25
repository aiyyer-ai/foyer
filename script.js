let image;
window.onload = function(){
	image = document.getElementById('image');
	image.style.width = `800px`;
	image.style.background = `no-repeat url(./foyer/entrance.png)`;
	image.style.height = `500px`;
	image.addEventListener('click', turn);
}

function turn(event) {
	let imageBounds = image.getBoundingClientRect();
	if(!(event.clientX > imageBounds.left && event.clientX < imageBounds.left + imageBounds.width/16 || event.clientX < imageBounds.right && event.clientX > imageBounds.right - imageBounds.width/16)) {
		return false;
	}
	let currentDirection = image.style.background.split('.').reverse()[1].split(`/`).reverse()[0];
	let sourceImage = ["library", "workshop", "study", "entrance"];
	if(event.clientX < imageBounds.right && event.clientX > imageBounds.right - imageBounds.width/16) {
		sourceImage = ["study", "entrance", "library", "workshop"];
	}
	switch(currentDirection) {
	case "entrance":
		setBackground(sourceImage[0]);
		break;
	case "library":
		setBackground(sourceImage[1]);
		break;
	case "workshop":
		setBackground(sourceImage[2]);
		break;
	case "study":
		setBackground(sourceImage[3]);
		break;
	default:
	}
}

function setBackground(filename) {
	image.style.background = `no-repeat url(./foyer/${filename}.png)`;
}