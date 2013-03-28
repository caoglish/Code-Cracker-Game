const PLAY_GROUND_AREA='#play-ground-area';
const DRAG_ITEM_PREPARED_AREA='#drag-item-prepared-area';
const GAME='#game';
const DRAG_ITEM ='.drag-item';
const DROP_ROW='.drop-row';
const ANSWER_ROW='.answer-row';
const DROP_CELL = '.drop-cell';
const INFO_AREA = '.info-area';
const MESSAGE_AREA = '#message-area';
const BODY = 'body';
const DESCRIPTION_AREA ='#description-area'
const RESULT_WIN="WIN";
const RESULT_LOST="LOST";

const GAME_ROWS= 8;//original is loop 8, change number for testing.

const gameRule ='<b>Code Cracker </b><br/>'
	 +'1.Please guess these 4 random numbers. <br/>'
	 +'2.Drag and drop 4 numbers into the row for one guessing.<br/>'
	 +'3.If right number is in right place, it marks as A and number plus 1 for A.(like A1) <br/>'
     +'4.If right number is in wrong place, mark as B and number plus 1 for B (like B1) <br/>'
	 +'5.Your Goal is <b>A4B0</b>, if 4 right numbers are all in right places, you win.<br/>'
	 +'6.You have 8 chances to guess. otherwise you lose.<br/>	 ';
	