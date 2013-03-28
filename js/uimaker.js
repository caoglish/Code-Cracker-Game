//functions 
//parseIdClassName convert css name to html name of id or class. this can allow constant value for both html and jquery.

//UIMaker Class

;(function ($,window,undefined){
	var UIMaker=function (){};

	var $game;
	var $play_ground_area;
	var $description_area;

	UIMaker.prototype.initialization = function(){
		$game=$.tag('div',{id:utils.cropFirstSymbol(GAME)});
		$(BODY).append($game);
		this.makeDragItemPreparedArea();
		this.makePlayGroundTable();
		this.makeMessageArea();
		this.makeDescriptionArea();
	}

	UIMaker.prototype.makePlayGroundTable = function(){
		$play_ground_area=$.tag('div',{id:utils.cropFirstSymbol(PLAY_GROUND_AREA)})
		$game.append($play_ground_area);
		this.makeAnswerRow();
		for(var i=0;i<GAME_ROWS;i++) 
			{
				this.addRow();
			}
	}

	UIMaker.prototype.addRow =function(){
		var $divDropRow = $.tag('div',{class:utils.cropFirstSymbol(DROP_ROW)});
		for(var i=0; i<4; i++)
		{
			$divDropRow.append(this.makeDropCell(''));
		}
		$divDropRow.append($.tag('div',{class:utils.cropFirstSymbol(INFO_AREA )}));;
		$play_ground_area.append($divDropRow);
	}

	UIMaker.prototype.makeAnswerRow = function(){
		$play_ground_area.append($.tag('div',{class: utils.cropFirstSymbol(ANSWER_ROW)}));

		var divAnswerRow = $(ANSWER_ROW);
		for(var i=0; i<4; i++)
		{
			divAnswerRow.append(this.makeDropCell('').droppable( "disable" ));
		}
	}

	UIMaker.prototype.makeDragItemPreparedArea = function(){
		$drag_item_prepared_area=$.tag('div',{id:utils.cropFirstSymbol(DRAG_ITEM_PREPARED_AREA)})
		$game.append($drag_item_prepared_area);
		for(var i=0;i<10;i++)
		{
			$drag_item_prepared_area.append(this.MakeDragItem(i));
		}
	}

	//make a drop cell
	UIMaker.prototype.makeDropCell = function(num){

		return $.tag('div',{class:utils.cropFirstSymbol(DROP_CELL)})
					.text(num)
					.attr('data-val',num)
					.droppable()	;
	}

	//Make a Drag Item
	UIMaker.prototype.MakeDragItem = function(num){
		return $.tag('div',{class:utils.cropFirstSymbol(DRAG_ITEM)})
					.text(num)
					.attr('data-val',num)
					.draggable({revert:"invalid"});
				
	}

	//Refresh Drag Item Prepared Area 
	//clear the area first, then re-make all the drag items.
	UIMaker.prototype.refreshDragItemPreparedArea = function(){ 
		$drag_item_prepared_area.html('');	
		for(var i=0;i<10;i++)
		{
			$drag_item_prepared_area.append(this.MakeDragItem(i));
		}
	}

	UIMaker.prototype.makeMessageArea = function(){
		$game.append($.tag('div',{id:utils.cropFirstSymbol(MESSAGE_AREA)}));
	}

	UIMaker.prototype.makeDescriptionArea = function(){
		$description_area=$.tag('div',{id:utils.cropFirstSymbol(DESCRIPTION_AREA)})
		$game.append($description_area);
		$description_area.html(gameRule);
	}
	
	window.UIMaker=UIMaker;
})(jQuery,window);