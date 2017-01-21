/////////////////////////////////////////////////////////////////////////////////////////////////////
// sticky button popup
var stickyWasOpen = 0;
$(document).ready(function() {
	setTimeout(sticky_open, 5 * 1000);
	$(".sticky").hover(
		function(){stickyWasOpen = 1;$(".sticky").removeClass("sticky_isClosed");},
		function(){stickyWasOpen = 0; setTimeout(sticky_close, 1 * 1000);}
	);
});
$(document).ready(function() {
	var now = new Date(),
		popup = localStorage.getItem("popup_sticky"),
		length = 1;

	if (popup == null) {
		showSoon();
	}else{
		var popup_date = new Date(popup);
		popup_date.setDate(popup_date.getDate() + length);
		if (popup_date <= now){
			sticky_open();
		}
	}
});
function sticky_open(){
	if (stickyWasOpen == 0){
		var d = new Date().toUTCString();
		setTimeout(function(){
			$(".sticky").addClass("sticky_isActive");
			stickyWasOpen = -1;
			setTimeout(sticky_close, 8 * 1000);
		}, 2 * 1000);
		localStorage.setItem("popup_sticky", d);
	}
}
function sticky_close(force){
	if (stickyWasOpen != 1 || force){
		$(".sticky").removeClass("sticky_isActive");
		$(".sticky").addClass("sticky_isClosed");
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////