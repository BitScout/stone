
var stoneGlobalMode = false;

function stone() {
	var words = document.getElementsByTagName("w");
	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		word.onmouseover = function(){
			var n = this.getAttribute('n');
			var selector = "[n="+n+"]";
			var selectInElement = document;
			if(!stoneGlobalMode) {
				selectInElement = this.parentElement.parentElement;
			}
			var translations = selectInElement.querySelectorAll(selector);
			for (var i = 0; i < translations.length; i++) {
				translation = translations[i];
				translation.className += " highlight";
			}
		};
		word.onmouseout = function(){
			var n = this.getAttribute('n');
			var selector = "[n="+n+"]";
			var translations = document.querySelectorAll(selector);
			for (var i = 0; i < translations.length; i++) {
				translation = translations[i];
				translation.className = translation.className.replace( /(?:^|\s)highlight(?!\S)/g , '' );
			}
		};
	}
}

stone();
