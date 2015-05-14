// Your JS goes here

var win = new Audio(['http://www.freshly-ground.com/misc/music/20060826%20-%20Armstrong.mp3']);
	win.play();


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

randomColor();



