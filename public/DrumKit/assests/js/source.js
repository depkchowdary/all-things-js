//NoteToSelf: Here the best way is listen for key presses no mater where in the page and 
//fire events to specific elements 

//use of audio and custom attributes is non-standard

// audio[data-key="${event.keyCode}"]` is ES6 string literal and needs to be understood 

// the idea of returning in a function as break is good way to keep in mind

window.addEventListener('keydown', function(event){
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
	if(!audio) return;
	audio.currentTime=0;
	audio.play();
	key.classList.add('playing')
});



//Tansitionend is event fired after css transition ended on keys i.e border width(Select the attribute which has universal compatibility)
const playedKeys = document.querySelectorAll(".key")
console.log(playedKeys[0])
for(let i=0; i<playedKeys.length; i++){
	console.log(playedKeys[i])
	playedKeys[i].addEventListener("transitionend", function(event){
		if(event.propertyName != "border-bottom-width")
		return;
		this.classList.remove('playing')
	});
}

