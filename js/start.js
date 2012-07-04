$(document).ready(function(){
	//uimaker
	var uimaker= new UIMaker();
	uimaker.initialization();
	var ge=new gameEngine();
	ge.initialization();
	
	$(DROP_CELL).droppable({
	drop: function(event, ui) { 
			var dropCell = $(this);
			ge.run(ui.draggable,dropCell);
			 }
	});

});