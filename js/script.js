window.onload = function () {

	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	audio.volume = 0.6;

	music.addEventListener("touchstart", function (event) {
		if (audio.paused) {
			audio.play();
			this.setAttribute("class", "play");
		} else {
			audio.pause();
			this.setAttribute("class", "");
		}
	}, false);

	var page1 = document.getElementById("page1")
	var page2 = document.getElementById("page2")
	var page3 = document.getElementById("page3")
	page1.addEventListener("touchstart", function (event) {
		page1.style.display = "none";
		page2.style.display = "block";
		page2.setAttribute("class", "page fadeIn");
	}, false);
	page2.addEventListener("touchstart", function (event) {
		page2.style.display = "none";
		page3.style.display = "block";
		page3.style.top = "100%"
		page3.setAttribute("class", "page fadeIn");
	}, false);
	page3.addEventListener("touchstart", function (event) {
		page3.style.top = 0
		page3.style.display = "none";
		page1.style.display = "block";
		page1.setAttribute("class", "page fadeIn");
	}, false);
}