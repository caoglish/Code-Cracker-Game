$(document).ready(function(){
	if(checkBrowserIsIE()){
		$('body').text('This game do not support IE.Please use Firefox or Chrome');
	}else{
		run();
	}



});

function run(){

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


}

