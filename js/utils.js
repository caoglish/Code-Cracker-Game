(function ($,window,undefined){
	utils={
		checkBrowserIsIE:function(){
			var browser=$.browser;
			if (browser.msie) return true;
			return false;
		},
		cropFirstSymbol:function (str) {
			var patt = /^#|^\./;
			return str.replace(patt, '');
		},
		
		
	}
	
	$.tag = function (tag, opts) {
			return $('<' + tag + '/>', opts);
		}
})(jQuery,window);

 