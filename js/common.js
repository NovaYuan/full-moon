/**
 * Created by yuan on 2016/4/13.
 */
'use strict';
var formateDate = function(num, isSimple, isText, splitLine) {
    var date = new Date(num),
        year = date.getFullYear(),
        month = date.getMonth()+1,
        days = date.getDate(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    if(month.toString().length == 1){
        month = "0"+month.toString();
    }
    if(days.toString().length == 1){
        days = "0"+days.toString();
    }
    if(!isSimple){
        if(hours.toString().length == 1){
            hours = "0"+hours.toString();
        }
        if(minutes.toString().length == 1){
            minutes = "0"+minutes.toString();
        }
        if(seconds.toString().length == 1){
            seconds = "0"+seconds.toString();
        }

        if(isText){
            return year + "年" + month + "月" + days + "日" + hours + ":" + minutes + ":" + seconds;
        }else if(splitLine){
            return year + splitLine + month + splitLine + days + " " + hours + splitLine + minutes + splitLine + seconds;
        }else{
            return year + "-" + month + "-" + days + " " + hours + ":" + minutes + ":" + seconds;
        }
    }else{
        if(isText){
            return year + "年" + month + "月" + days + "日";
        }else if(splitLine){
            return year + splitLine + month + splitLine + days;
        }else{
            return year + "-" + month + "-" + days;
        }
    }
};