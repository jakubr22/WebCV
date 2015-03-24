var mouseIn = function(){
	$(this).addClass('hover')
}

var mouseOut = function(){
	$(this).removeClass('hover')
}

var main = function() {
	$('.category').hover(mouseIn, mouseOut);
}

$(document).ready(main);