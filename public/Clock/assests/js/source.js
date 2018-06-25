const secondsHand = document.querySelector(".seconds")
const minutesHand = document.querySelector(".minutes")
const hoursHand = document.querySelector(".hours")


function updateSeconds(){
	var date=new Date()
	var secondsNow = date.getSeconds();
	var degree = ((secondsNow/60)*360)+90
	secondsHand.style.transform = `rotate(${degree}deg)`
}
function updateMinutes(){
	var date=new Date()
	var minutesNow = date.getMinutes();
	var degree = ((minutesNow/60)*360)+90
	minutesHand.style.transform = `rotate(${degree}deg)`
}
function updateHours(){
	var date=new Date()
	var hours = date.getHours();
	if (hours > 12) {
    	hours -= 12;
	} else if (hours === 0) {
   		hours = 12;
	}
	var degree = ((hours/12)*360)+90
	hoursHand.style.transform = `rotate(${degree}deg)`
}


setInterval(function(){
	updateSeconds();
	updateMinutes();
	updateHours();
}, 1000);