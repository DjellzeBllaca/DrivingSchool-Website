function myFunction() {
	var video = document.getElementById("vid1");
	var btn = document.getElementById("myBtn");
  
	if (video.paused) {
		video.play();
		btn.innerHTML = "Pause";
	} else {
		video.pause();
		btn.innerHTML = "Play";
	}
}





