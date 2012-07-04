//UIMaker Class
function gameEngine(){
	//this.rowPlaceNo=0;
	this.uimker=new UIMaker();
	this.ng=new NumberGenerator();
	this.answer=[];
}

gameEngine.prototype.initialization = function(){
//	this.rowPlaceNo=0;
	this.ng.generateFourNumbers();
	this.answer=this.ng.getFourNumbers();
	//console.log(this.answer);//for testing. show the answer in console.
	$(DROP_ROW+":not(:first)").find(DROP_CELL).droppable('disable');
}

gameEngine.prototype.run = function(dragItem,dropcell){
	//console.log('run'); for testing.
	this.processing(dragItem,dropcell);
}

gameEngine.prototype.processing = function(dragItem,dropCell){
	var currentRow=dropCell.parent();
	selectVal=dragItem.data('val');
	
	//drop cell graphic processing
	dropCell
		.css('background-color','pink')
		.text(selectVal)
		.data('val',selectVal)
		.droppable( "disable" )
		.css('opacity','0.86');
	
	//drag item graphic processing
	dragItem
		.offset({top: dropCell.offset().top})
		.offset({left:dropCell.offset().left})
		.draggable( "disable" );
	
	//get current row's avaible dropable number;
	var actDrpCllNum=currentRow.children(DROP_CELL).filter(function(index)
	{
		return $(this).droppable('option','disabled')==false;
	}).length;
	
	if (actDrpCllNum==0)
	{
		var rowNumbers=[];
		//get 4 numbers from current row
		currentRow.children(DROP_CELL).each(function(index){
			rowNumbers.push($(this).data('val'));
		});
		
		//console.log(rowNumbers); // for testing.
		//make hint for one row
		var hint=this.makeHint(this.answer,rowNumbers);
		//console.log(hint); // for testing.
	
		currentRow.children(INFO_AREA).text(hint);
		//check the game is whether win or not.
		if (hint=='A4B0')
		{	//processing if guess is right.
			//console.log(RESULT_WIN); // for testing. show result win
			$(MESSAGE_AREA).text(RESULT_WIN);
			this.showAnswer();
			$(MESSAGE_AREA).effect('shake',500);
		
		}else
		{
			//procssing if guess is not right
			nextRow=currentRow.next(DROP_ROW);//next Row
			if(nextRow.find(DROP_CELL).length !=0 )
			{	
				//enable the next row.
				nextRow.find(DROP_CELL).droppable('enable');
			}else
			{
				//lost if no next row.
				//console.log(RESULT_LOST);//// for testing. show result lost
				$(MESSAGE_AREA).text(RESULT_LOST);
				this.showAnswer();
				$(MESSAGE_AREA).effect('shake',500);
			}
		}
		//refresh the drag items.
		this.uimker.refreshDragItemPreparedArea();
	}
}

gameEngine.prototype.makeHint = function (gmAns,usrAns){
	var a=0;
	var b=0;
	var loop=usrAns.length;
	for(var i=0;i<loop;i++)
	{
		num=usrAns.shift();
		if(gmAns.indexOf(num)==i)
		{
			a++;
		}else if(gmAns.indexOf(num)>-1)
		{
			b++;
		}
	}
	return 'A'+a+'B'+b;
}

gameEngine.prototype.showAnswer = function (){
	var answer=this.answer;
	var divAnswerRow=$(ANSWER_ROW);
	divAnswerRow.children(DROP_CELL).each(function (index){
		$(this).text(answer.shift());
	});

}