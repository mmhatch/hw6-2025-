var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	console.log("auto"+video.autoplay);
	video.loop=false;
	console.log("loop"+video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause Video");
	video.pause();

});
document.querySelector("#slower").addEventListener("click", function() {
	let change = video.playbackRate/10;
	video.playbackRate = video.playbackRate - change;
	console.log("slower "+video.playbackRate)
});
document.querySelector("#faster").addEventListener("click", function() {
	let change = video.playbackRate/9;
	video.playbackRate = video.playbackRate + change;
	console.log("faster "+video.playbackRate)
});
document.querySelector("#skip").addEventListener("click", function() {
	let time = video.currentTime += 10;
	if (time < video.duration){
	video.currentTime += 10;
	console.log("where "+video.currentTime);
	}
	else{
	video.currentTime = 0;
	console.log("where "+video.currentTime);
	}
});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.volume == 0){
	video.volume = 1;
	document.getElementById("mute").innerHTML="Mute";
	console.log("volume"+video.volume);
	}
	else{
	video.volume = 0;
	document.getElementById("mute").innerHTML="Unmute";
	console.log("volume"+video.volume);
	}
});
document.querySelector("#slider").addEventListener("input", function() {
	var slider = document.getElementById("slider").value
	video.volume = slider/100;
	console.log("volume"+video.volume);
	document.getElementById("volume").innerHTML=slider+"%";
});
document.querySelector("#vintage").addEventListener("click", function() {
	video.style.filter = "grayscale(100%)";
});
document.querySelector("#orig").addEventListener("click", function() {
	video.style.filter = "grayscale(0%)";
});

