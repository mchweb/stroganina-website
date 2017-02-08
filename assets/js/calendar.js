/////////////////////////////////////////////////////////////////////////////////////////////////////
// calendar

var ed = 
[
{
type: 1,
date: [2016,09,29]
},
{
type: 1,
date: [2016,10,06]
},
{
type: 1,
date: [2016,10,29]
},
{
type: 1,
date: [2016,10,29]
},
{
type: 1,
date: [2016,10,30]
},
{
type: 1,
date: [2016,11,03]
},
{
type: 1,
date: [2016,11,04]
},
{
type: 1,
date: [2016,11,08]
},
{
type: 1,
date: [2016,11,11]
},
{
type: 1,
date: [2016,11,12]
},
{
type: 1,
date: [2016,11,12]
},
{
type: 1,
date: [2016,11,13]
},
{
type: 1,
date: [2016,11,17]
},
{
type: 1,
date: [2016,11,17]
},
{
type: 1,
date: [2016,11,19]
},
{
type: 1,
date: [2016,11,19]
},
{
type: 1,
date: [2016,11,26]
},
{
type: 1,
date: [2016,11,26]
},
{
type: 1,
date: [2016,12,01]
},
{
type: 2,
startDate : [2016,12,01],
endDate: [2016,12,05]
},
{
type: 1,
date: [2016,12,03]
},
{
type: 2,
startDate : [2016,12,20],
endDate: [2016,12,30]
},
{
type: 1,
date: [2016,12,24]
},
{
type: 2,
startDate : [2017,01,02],
endDate: [2017,01,08]
},
{
type: 1,
date: [2017,01,07]
},
{
type: 1,
date: [2017,01,13]
},
{
type: 1,
date: [2017,01,14]
},
{
type: 1,
date: [2017,01,14]
},
{
type: 1,
date: [2017,01,19]
},
{
type: 1,
date: [2017,01,21]
},
{
type: 1,
date: [2017,01,22]
},
{
type: 1,
date: [2017,01,22]
},
{
type: 1,
date: [2017,01,22]
},
{
type: 1,
date: [2017,01,26]
},
{
type: 1,
date: [2017,01,26]
},
{
type: 1,
date: [2017,01,26]
},
{
type: 1,
date: [2017,01,28]
},
{
type: 1,
date: [2017,01,28]
},
{
type: 1,
date: [2017,02,04]
},
{
type: 1,
date: [2017,02,04]
},
{
type: 1,
date: [2017,02,04]
},
{

type: 3,
date: [2017,02,05]

},
{
type: 1,
date: [2017,02,05]
},
{

type: 3,
date: [2017,02,08]

},
{
type: 1,
date: [2017,02,10]
},
{
type: 1,
date: [2017,02,11]
},
{
type: 1,
date: [2017,02,12]
},
{
type: 1,
date: [2017,02,14]
},
];
var $picker = $('.calendar__datepicker .datepicker-here');


$picker.datepicker({
    
    onRenderCell: function (date, cellType) {
        var cd = date.getDate(),
            cm = date.getMonth() + 1,
            cy = date.getFullYear();
        var today = new Date();
        today.setHours(0,0,0,0);
        var td = today.getDate(),
            tm = today.getMonth() + 1,
            ty = today.getFullYear();

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
                    var t = new Date(ed[i].date[0], ed[i].date[1]-1, ed[i].date[2]);
                    if (t.getDay() == date.getDay()){
                        f = true;
                    }
                }
            }
            

            if (f){
                if (date < today){
                    return {
                        html : "<a href='http://stroganina-bar.ru/afisha/calendar?y="+cy+"&m="+cm+"&d="+cd+"'>"+cd+"</a>",
                        classes: "hasEvent last"
                    }
                }else{
                    return {
                        html : "<a href='http://stroganina-bar.ru/afisha/calendar?y="+cy+"&m="+cm+"&d="+cd+"'>"+cd+"</a>",
                        classes: "hasEvent"
                    }
                }
            }else{
                if (cd == td && cm == tm && cy == ty){
                    return;
                }else{
                    return{
                        disabled: true
                    };
                }
            }
        }
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////