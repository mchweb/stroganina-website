/////////////////////////////////////////////////////////////////////////////////////////////////////
// calendar
var eventDates = [[2017, 1, 1], [2017, 1, 5], [2017, 1, 12], [2017, 1, 24]],
    $picker = $('.calendar__datepicker .datepicker-here');

var sdate = new Date(2017, 0, 1);
$picker.datepicker({
	startDate:sdate,
    onRenderCell: function (date, cellType) {
        var cd = date.getDate(),
        	cm = date.getMonth() + 1,
        	cy = date.getFullYear();

        // Добавляем вспомогательный элемент, если число содержится в `eventDates`
        if (cellType == 'day') {
        	var n = eventDates.length;
        	var f = false;
        	for (var i = 0; i < n; i++) {
        	   if (cd == eventDates[i][2] && cm == eventDates[i][1] && cy == eventDates[i][0]){
        	       f = true;
        	   }
        	}

        	if (f){
            	return {
            		html : "<a href='http://stroganina-bar.ru/afisha/calendar?y="+cy+"&m="+cm+"&d="+cd+"'>"+cd+"</a>",
               		classes: "hasEvent"
            	}
        	}else{
        		return {
        			disabled: true
        		}
        	}
        }
    },
    onSelect: function onSelect(fd, date) {
    	var cd = date.getDate(),
        	cm = date.getMonth() + 1,
        	cy = date.getFullYear();
    	window.location.href = "http://stroganina-bar.ru/afisha/calendar?y="+cy+"&m="+cm+"&d="+cd;
    }
});

var afisha_date = new Date($(".js-afisha-date").data("y"), $(".js-afisha-date").data("m")-1, $(".js-afisha-date").data("d"));
var options = { year: 'numeric', month: 'narrow', day: 'numeric' };
$(".js-afisha-date").html(afisha_date.toLocaleDateString('ru-RU'), options);
/////////////////////////////////////////////////////////////////////////////////////////////////////