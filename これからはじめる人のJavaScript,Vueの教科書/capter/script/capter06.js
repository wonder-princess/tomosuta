// const today = new Date();

// 1970 年 1 月 1 日 UTC 時間 に対し -100,000,000 日から 100,000,000 日まで
// 月は-1で設定

let firstPantsMan = new Date(1543, 0, 31);
let Xmas95 = new Date("December 25, 1995 13:30:00");

document.write('徳川家康:' + firstPantsMan);
document.write('クリスマス:' + Xmas95);

class Time {
    year;
    month;
    day;
    hour;
    second;
    minute;
    date;    
    time;

    consoleOutput() {
        // console.log(this.year);
    }

    constructor() {
        const now = new Date();
        this.year = now.getFullYear();
        this.month = now.getMonth();
        this.day = now.getDate();
        this.hour = now.getHours();
        this.second = now.getSeconds();
        this.minute = now.getMinutes();
        this.date = [this.year, this.month, this.day];
        this.time = [this.hour, this.minute, this.second];
    }
    /*
    constructor(year, month, day, hour, second, minute) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.second = second;
        this.minute = minute;
    }
    */
}


function setTime() {
    const now = new Time();
    let timeStr;
    // now.consoleOutput();
    timeStr = convertDate(now.year, now.month, now.day) + ' ' + convertTime(now.hour, now.minute, now.second);
    document.getElementById('frame_inner').innerHTML = timeStr;
}

setInterval('setTime()', 1000);

function convertTime() {
    var str = '';
    for (var i = 0; i < arguments.length; i += 1) {
        if(arguments[i] <= 9) {
            arguments[i] = '0' + arguments[i];
        }
        if (i + 1 < arguments.length){
            str += arguments[i] + ':';
        }else{
            str += arguments[i];
        }
    }
    return str;
}

function convertDate(year, month, day) {
    var str = '';
    month += 1;
    for (var i = 0; i < arguments.length; i += 1) {
        if(arguments[i] <= 9) {
            arguments[i] = '0' + arguments[i];
        }
        if (i + 1 < arguments.length){
            str += arguments[i] + '/';
        }else{
            str += arguments[i];
        }
    }
    return str;
}
