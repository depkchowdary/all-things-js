const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
let lastChecked

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

function handleCheck(event){
	//flag variable
	let inBetween;
	//shift key is held and item is being checked and not unchecked
	if(event.shiftKey && this.checked){
		//looping over all the checkboxes
		checkboxes.forEach(checkbox =>{
		// check to know if the elements checked are in between the first checked
		// and current checked item.
		//checkbox === this is true when holding the shift key and checked the item
		//which sets the inBetween variable 
		if(checkbox === this || checkbox === lastChecked){
			inBetween = !inBetween;
		}
		if(inBetween){
			checkbox.checked = true;
		}
	})	
	}
	lastChecked =this;
}