// window.onload = function(){
// 	document.addEventListener(`click`, moveAround);
// 	document.body.style.background = `url("./entrance.png") no-repeat center center fixed`;
// 	document.body.style.backgroundSize = `contain`;
// }

// function moveAround(event) {
// 	if(event.clientX > event.target.getBoundingClientRect().right - 100) {
// 		toRightRoom();
// 	} else if(event.clientX < event.target.getBoundingClientRect().left + 100) {
// 		toLeftRoom();
// 	}
// }

// function toLeftRoom() {
// 	if(document.body.style.background.includes(`entrance`)) {
// 		document.body.style.background = `url("./library.png") no-repeat center center fixed`;
// 		document.body.style.backgroundSize = `contain`;
// 	} else if(document.body.style.background.includes(`library`)) {
// 		document.body.style.background = `url("./workshop.png") no-repeat center center fixed`;
// 		document.body.style.backgroundSize = `contain`;	
// 	} else if(document.body.style.background.includes(`study`)) {
// 		document.body.style.background = `url("./entrance.png") no-repeat center center fixed`;
// 		document.body.style.backgroundSize = `contain`;	
// 	} else {
// 		document.body.style.background = `url("./study.png") no-repeat center center fixed`;
// 		document.body.style.backgroundSize = `contain`;	
// 	}
// }

// function toRightRoom() {
// 	if(document.body.style.background.includes(`entrance`)) {
// 		document.body.style.background = `url("./study.png") no-repeat center center fixed`;
// 		document.body.style.backgroundSize = `contain`;
// 	} else if(document.body.style.background.includes(`library`)) {
// 		document.body.style.background = `url("./entrance.png") no-repeat center center fixed`;
// 		document.body.style.backgroundSize = `contain`;	
// 	} else if(document.body.style.background.includes(`study`)) {
// 		document.body.style.background = `url("./workshop.png") no-repeat center center fixed`;
// 		document.body.style.backgroundSize = `contain`;	
// 	} else {
// 		document.body.style.background = `url("./library.png") no-repeat center center fixed`;
// 		document.body.style.backgroundSize = `contain`;	
// 	}
// }