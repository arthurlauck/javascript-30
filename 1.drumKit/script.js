window.addEventListener('keydown', (e) => {
	// Select elements
	var sound = document.querySelector(`source[data-key="${e.keyCode}"]`);
	var key = document.querySelector(`div[data-key="${e.keyCode}"]`);

	// If not found the audio or key
	if(!sound || !key) return;

	// Play sound
	sound = new Audio(sound.src);
	sound.play();
	
	// Add class when playing
	key.classList.add("playing");
});

// Select all keys
var keys = document.querySelectorAll(".keys");

// Event transition end
keys.forEach((ele) => {
	ele.addEventListener('transitionend', (e) => {
		e.target.classList.remove("playing");
	});
});