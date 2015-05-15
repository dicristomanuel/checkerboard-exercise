// PIXEL ART

// **Creates the whole grid** // 

	for (var i=0; i < 1012; i++) {
		var tile = document.createElement("div");
		var body = document.querySelector("body");
			body.appendChild(tile);
			tile.style.width = "2%";
			tile.style.float = "left";
			tile.style.paddingBottom = "2%";
			tile.style.border = "1px solid grey";
			tile.style.margin = "0.5px";

	} //for loop



// **Creates the different tile palette** // 

		var tileRed = document.createElement("div");
		var body = document.querySelector("body");
			body.appendChild(tileRed);
			tileRed.style.width = "2%";
			tileRed.style.float = "left";
			tileRed.style.paddingBottom = "2%";
			tileRed.style.border = "1px solid grey";
			tileRed.style.margin = "0.5px";
			tileRed.style.backgroundColor = "#f80c12";

		var tileRedLight = document.createElement("div");
		var body = document.querySelector("body");
			body.appendChild(tileRedLight);
			tileRedLight.style.width = "2%";
			tileRedLight.style.float = "left";
			tileRedLight.style.paddingBottom = "2%";
			tileRedLight.style.border = "1px solid grey";
			tileRedLight.style.margin = "0.5px";
			tileRedLight.style.backgroundColor = "#ff6644";

		var tileOrange = document.createElement("div");
		var body = document.querySelector("body");
			body.appendChild(tileOrange);
			tileOrange.style.width = "2%";
			tileOrange.style.float = "left";
			tileOrange.style.paddingBottom = "2%";
			tileOrange.style.border = "1px solid grey";
			tileOrange.style.margin = "0.5px";
			tileOrange.style.backgroundColor = "#feae2d";

		var tileYellow = document.createElement("div");
		var body = document.querySelector("body");
			body.appendChild(tileYellow);
			tileYellow.style.width = "2%";
			tileYellow.style.float = "left";
			tileYellow.style.paddingBottom = "2%";
			tileYellow.style.border = "1px solid grey";
			tileYellow.style.margin = "0.5px";
			tileYellow.style.backgroundColor = "#d0c310";

		var tileLightGreen = document.createElement("div");
		var body = document.querySelector("body");
			body.appendChild(tileLightGreen);
			tileLightGreen.style.width = "2%";
			tileLightGreen.style.float = "left";
			tileLightGreen.style.paddingBottom = "2%";
			tileLightGreen.style.border = "1px solid grey";
			tileLightGreen.style.margin = "0.5px";
			tileLightGreen.style.backgroundColor = "#aacc22";

		var tileGreen = document.createElement("div");
		var body = document.querySelector("body");
			body.appendChild(tileGreen);
			tileGreen.style.width = "2%";
			tileGreen.style.float = "left";
			tileGreen.style.paddingBottom = "2%";
			tileGreen.style.border = "1px solid grey";
			tileGreen.style.margin = "0.5px";
			tileGreen.style.backgroundColor = "#69d025";

		var tileLightBlue = document.createElement("div");
		var body = document.querySelector("body");
			body.appendChild(tileLightBlue);
			tileLightBlue.style.width = "2%";
			tileLightBlue.style.float = "left";
			tileLightBlue.style.paddingBottom = "2%";
			tileLightBlue.style.border = "1px solid grey";
			tileLightBlue.style.margin = "0.5px";
			tileLightBlue.style.backgroundColor = "#12bdb9";

		var tileBlue = document.createElement("div");
		var body = document.querySelector("body");
			body.appendChild(tileBlue);
			tileBlue.style.width = "2%";
			tileBlue.style.float = "left";
			tileBlue.style.paddingBottom = "2%";
			tileBlue.style.border = "1px solid grey";
			tileBlue.style.margin = "0.5px";
			tileBlue.style.backgroundColor = "#3311bb";



// **Assings a color to the variable color** // 

		var color;
			tileRed.addEventListener("click", function() {
				color = "#f80c12";
			});

			tileRedLight.addEventListener("click", function() {
				color = "#ff6644";
			});

			tileOrange.addEventListener("click", function() {
				color = "#feae2d";
			});

			tileYellow.addEventListener("click", function() {
				color = "#d0c310";
			});

			tileLightGreen.addEventListener("click", function() {
				color = "#aacc22";
			});

			tileGreen.addEventListener("click", function() {
				color = "#69d025";
			});

			tileLightBlue.addEventListener("click", function() {
				color = "#12bdb9";
			});

			tileBlue.addEventListener("click", function() {
				color = "#3311bb";
			});



// **Change color of the selected tiles** // 

	var divs = document.querySelectorAll("div");



		for(var i=0; i < divs.length; i++) {
			divs[i].addEventListener("click", function() {
			this.style.backgroundColor = color;
		});	
	} //for loop


  


