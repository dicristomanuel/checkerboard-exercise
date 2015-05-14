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

redBlack();

