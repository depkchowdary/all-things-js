const panels = document.querySelectorAll('.panel')
function addToggle(){
	this.classList.toggle('open')
}
panels.forEach(panel => panel.addEventListener('click',addToggle))

function transitionEnd(event){
	if(event.propertyName.includes('flex')){
		this.classList.toggle('open-active')
	}
}
panels.forEach(panel => panel.addEventListener('transitionend',transitionEnd))
