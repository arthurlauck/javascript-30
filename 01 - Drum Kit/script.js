function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}

window.addEventListener('keydown', (e) => {
	// Select elements
	var sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	var key = document.querySelector(`div[data-key="${e.keyCode}"]`);

	// If not found the audio or key
	if(!sound || !key) return;

	// Play sound
	// sound = new Audio(sound.src); // doesnt need to create a new Audio element
	sound.currentTime = 0;
	sound.play();
	// Add class when playing
	key.classList.add("playing");
});

// Select all keys
var keys = document.querySelectorAll(".keys");

// Event transition end
keys.forEach((ele) => {
	ele.addEventListener('transitionend', removeTransition);
});