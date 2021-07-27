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