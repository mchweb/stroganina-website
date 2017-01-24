/////////////////////////////////////////////////////////////////////////////////////////////////////
// calendar

var ed = 
[{
    type:1,
    date:[2017, 1, 1]
},
{
    type:2,
    startDate:[2017,1,3],
    endDate:[2017,1,6]
},
{
    type:3,
    date:[2017,1,2]
}
]
var $picker = $('.calendar__datepicker .datepicker-here');

var sdate = new Date(2017, 0, 1);
$picker.datepicker({
	startDate:sdate,
    onRenderCell: function (date, cellType) {
        var cd = date.getDate(),
        	cm = date.getMonth() + 1,
        	cy = date.getFullYear();

        // Добавляем вспомогательный элемент, если число содержится в `eventDates`
        if (cellType == 'day') {
        	var n = ed.length;
        	var f = false;
        	for (var i = 0; i < n; i++) {
                if (ed[i].type == 1){
                    if (cd == ed[i].date[2] && cm == ed[i].date[1] && cy == ed[i].date[0]){
                        f = true;
                    }
                }
                if (ed[i].type == 2){
                    if (cm == ed[i].startDate[1] && cy == ed[i].startDate[0] && cd >= ed[i].startDate[2] && cd <= ed[i].endDate[2]){
                        f = true;
                    }
                }
                if (ed[i].type == 3){
                    var t = new Date(ed[i].date[0], ed[i].date[1], ed[i].date[2]);
                    if (t.getDay() == date.getDay()){
                        f = true;
                    }
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
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////