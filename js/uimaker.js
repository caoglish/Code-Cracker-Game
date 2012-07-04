//functions 
//parseIdClassName convert css name to html name of id or class. this can allow constant value for both html and jquery.
function parseIdClassName(name){
	var patt=/^#|^\./;
	return name.replace(patt,'');
}

//UIMaker Class
function UIMaker(){}

UIMaker.PARA_CLASS='class';
UIMaker.PARA_ID='id';

UIMaker.prototype.makeDivStr = function(name,classOrId){
	
	var str= '';
	str += '<div ';
	if(classOrId==UIMaker.PARA_ID)
	{
		str += 'id';
	}else if(classOrId==UIMaker.PARA_CLASS){
	
		str += 'class';
	}else
	{
		str += 'id';
	}
	str += "='";
	str += name;
	str += "'></div>";
	
	return str;
}


UIMaker.prototype.initialization = function(){
	
	$(BODY).append(this.makeDivStr(parseIdClassName(GAME),UIMaker.PARA_ID));
	this.makeDragItemPreparedArea();
	this.makePlayGroundTable();
	this.makeMessageArea();
	this.makeDescriptionArea();
}

UIMaker.prototype.makePlayGroundTable = function(){
$(GAME).append(this.makeDivStr(parseIdClassName(PLAY_GROUND_AREA)));
var divPlyGrndArea=$(PLAY_GROUND_AREA);
this.makeAnswerRow();
for(var i=0;i<GAME_ROWS;i++) 
	{
		this.addRow();
	}
}

UIMaker.prototype.addRow =function(){
	var divDropRow = $(this.makeDivStr(parseIdClassName(DROP_ROW),UIMaker.PARA_CLASS));
	for(var i=0; i<4; i++)
	{
		divDropRow.append(this.makeDropCell(''));
	}
	
	divDropRow.append((this.makeDivStr(parseIdClassName(INFO_AREA),UIMaker.PARA_CLASS)));

	$(PLAY_GROUND_AREA).append(divDropRow);
}

UIMaker.prototype.makeAnswerRow = function(){
$(PLAY_GROUND_AREA).append(this.makeDivStr(parseIdClassName(ANSWER_ROW),UIMaker.PARA_CLASS));

	var divAnswerRow = $(ANSWER_ROW);
	for(var i=0; i<4; i++)
	{
		divAnswerRow.append(this.makeDropCell('').droppable( "disable" ));
	}
}

UIMaker.prototype.makeDragItemPreparedArea = function(){
	$(GAME).append(this.makeDivStr(parseIdClassName(DRAG_ITEM_PREPARED_AREA)));
	var divDrgItmPrprdArea=$(DRAG_ITEM_PREPARED_AREA);
		
	for(var i=0;i<10;i++)
	{
		divDrgItmPrprdArea.append(this.MakeDragItem(i));
	}
}

//make a drop cell
UIMaker.prototype.makeDropCell = function(num){
return $('<div class="'+parseIdClassName(DROP_CELL)+'" data-val="'+num+'">'+num+'</div>')
    .droppable()	;
}

//Make a Drag Item
UIMaker.prototype.MakeDragItem = function(num){
	return $('<div class="'+parseIdClassName(DRAG_ITEM)+'" data-val="'+num+'">'+num+'</div>').draggable({revert:"invalid"});
}

//Refresh Drag Item Prepared Area 
//clear the area first, then re-make all the drag items.
UIMaker.prototype.refreshDragItemPreparedArea = function(){ 

var divDrgItmPrprdArea=$(DRAG_ITEM_PREPARED_AREA);
	divDrgItmPrprdArea.html('');	
	for(var i=0;i<10;i++)
	{
		divDrgItmPrprdArea.append(this.MakeDragItem(i));
	}
}

UIMaker.prototype.makeMessageArea = function(){
$(GAME).append(this.makeDivStr(parseIdClassName(MESSAGE_AREA)));

}

UIMaker.prototype.makeDescriptionArea = function(){
$(GAME).append(this.makeDivStr(parseIdClassName(DESCRIPTION_AREA)));
var divMsgArea=$(DESCRIPTION_AREA);
divMsgArea.html(gameRule);
}