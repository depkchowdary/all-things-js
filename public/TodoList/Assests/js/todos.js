//parrent element is selected but element passed has 
//event listener
$('ul').on("click","li",function(){
	$(this).toggleClass("completed")
	})
$('ul').on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
		//removes parent element of span which is li
		//to prevent async js 
		$(this).remove()
	})
	// to stop event bubbling ie., to stop li event to fire
	//when event clicked on span
	event.stopPropagation()
})
$("input[type=text]").keypress(function(event){
	if(event.which === 13){
		var todoData = $(this).val()
		$(this).val("");
		$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+ todoData +"</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type=text]").fadeToggle(500);
})