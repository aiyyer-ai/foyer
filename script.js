let image;
let saveState;

window.onload = function(){

  saveStateManager(window.location.search);

	image = document.getElementById('image');
	image.style.width = `800px`;
	image.style.background = `no-repeat url(./foyer/entrance.png)`;
	image.style.height = `500px`;
	image.addEventListener('click', turn);
	//switch window test code
	window.addEventListener(`keydown`, examineCloser);
}

function saveStateManager(urlData) {
	if(urlData) {
		saveState = JSON.parse(atob(urlData.slice(1, urlData.length)));
	} else {
		saveState = {puzzleStates:{foyer:0, hatRack:0, fuseBox:0, paintings:0, bookshelf:0},inventory:{"pegs":[false, false, false, false], "hats":[false, false, false, false]}};
	}
  console.log(saveState);
}

function examineCloser(locationName) {
	const isNumber = isFinite(event.key);
	if(!isNumber) {
		return false;
	}
	let encodedData = btoa(JSON.stringify(saveState));
	window.location.href = `../foyer/index.html?${encodedData}`;
}

function turn(event) {
	let imageBounds = image.getBoundingClientRect();
	let sourceImage;
	let currentDirection = image.style.background.split('.').reverse()[1].split(`/`).reverse()[0];
	if(!(event.clientX > imageBounds.left && event.clientX < imageBounds.left + imageBounds.width/16 || event.clientX < imageBounds.right && event.clientX > imageBounds.right - imageBounds.width/16)) {
		if(event.clientY < imageBounds.bottom && event.clientY > imageBounds.bottom - imageBounds.height/8) {
			if(currentDirection.includes(`table`)) {
				currentDirection = currentDirection.replace(`table`,``);
				sourceImage = ["workshop", "study", "entrance", "library"];
			} else {
				sourceImage = ["workshoptable", "studytable", "entrancetable", "librarytable"];
			}
		} else {
			if(currentDirection.includes(`table`)) {
				return setBackground(currentDirection.replace(`table`,``));
			} else {
				return false;
			}
		}
	} else {
		sourceImage = ["library", "workshop", "study", "entrance"];
		if(event.clientX < imageBounds.right && event.clientX > imageBounds.right - imageBounds.width/16) {
			sourceImage = ["study", "entrance", "library", "workshop"];
		}
	}
	switch(currentDirection) {
	case "entrance":
	case "entrancetable":
		setBackground(sourceImage[0]);
		break;
	case "library":
	case "librarytable":
		setBackground(sourceImage[1]);
		break;
	case "workshop":
	case "workshoptable":
		setBackground(sourceImage[2]);
		break;
	case "study":
	case "studytable":
		setBackground(sourceImage[3]);
		break;
	default:
	}
}

function setBackground(filename) {
	image.style.background = `no-repeat url(./foyer/${filename}.png)`;
}