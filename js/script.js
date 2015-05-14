// Your JS goes here

var win = new Audio(['http://www.freshly-ground.com/misc/music/20060826%20-%20Armstrong.mp3']);
win.play();


function redBlack() {
	for (var i=0; i < 99; i++) {
		var tile = document.createElement("div");
		var body = document.querySelector("body");
		body.appendChild(tile);
		tile.style.width = "11.1%";
		tile.style.float = "left";
		tile.style.paddingBottom = "11.1%";
			if(i%2 === 0) {
				tile.style.background = "red";
			} else {
				tile.style.background = "black";
			} //if statement
	} //for loop
} //redBlack

//redBlack();



var colorSelector = function () {
    var chars = "0123456789ABCDEF".split('');
    var start = "#";
    for (var q = 0 ; q < 6 ; q++) {
        start += chars[Math.floor(Math.random() * 16)];
    }
    return start;
};

function randomColor() {
	for (var i=0; i < 99; i++) {
		var tile = document.createElement("div");
		var body = document.querySelector("body");
			body.appendChild(tile);
			tile.style.width = "11.1%";
			tile.style.float = "left";
			tile.style.paddingBottom = "11.1%";
			
			tile.style.background = colorSelector();
	} //for loop
} //randomColor

//randomColor();



// function gradient() {

// 	for (var i=0; i < 99; i++) {
// 		var tile = document.createElement("div");
// 		var body = document.querySelector("body");
// 		body.appendChild(tile);
// 		tile.style.width = "11.1%";
// 		tile.style.float = "left";
// 		tile.style.paddingBottom = "11.1%";

// 			if(i%2 === 0) {
// 				tile.style.background = "skyblue";
// 			} else {
// 				tile.style.background = "hotpink";
// 			} //if statement

// 	} //for loop
// } //gradient

//gradient();

function request() {
	var toDo = prompt("Static, random or fading?");
		if (toDo.toLowerCase() === "static") {
			redBlack();
		} else if (toDo.toLowerCase() === "random") {
			randomColor();
		} else if (toDo.toLowerCase() === "fading") {
			alert("couldn't solve that one sorry!")
		} else {
		 	alert("Please type one of the choices");	 	
		 	request();
		} //if statement
} //end request

request();