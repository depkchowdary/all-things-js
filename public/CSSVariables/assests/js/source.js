const inputs= document.querySelectorAll(".control")



function updateControls(){
	const suffix = this.dataset.sizing || "";
	/*setProperty updates css variables which are updated in HTML automatically
		propertyName is a DOMString representing the CSS property name to be modified.
		value Optional is a DOMString containing the new property value. If not specified, treated as the empty string.
		Note: value must not contain "!important" -- that should be set using the priority parameter
	*/
	document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}

/* nodelist has foreach in ES6*/

inputs.forEach(input => input.addEventListener('change' , updateControls))
inputs.forEach(input => input.addEventListener('mousemove',updateControls))
