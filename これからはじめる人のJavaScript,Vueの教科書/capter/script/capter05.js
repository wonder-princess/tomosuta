// プロントで値を入力
var numArr = new Array;
var symbolArr = new Array;
var flag = true;
var sum = 0;



let inputCalc = function () {
    sum = inputNum();
    while (flag) {        
        var symbol = inputSymbol();
        calc(symbol);
    }
}

let calc = function (symbol) {
    var val = inputNum();
    if (isNaN(num)) {
        flag = false;
        return;
    }
    if (symbol == "+") {
        sum += val;
    }
    else if (symbol == "-") {
        sum -= val;
    }
    else if (symbol == "*") {
        sum *= val;
    }
    else if (symbol == "/") {
        sum /= val;
    }
    else {
        flag = false;
    }
}

function inputNum() {
    var inputNum = prompt('数値を入力');
    if (inputNum == null || inputNum == '') {
        flag = false;
    }
    num = Number(inputNum);
    console.log(num);
    return num;
}

function inputSymbol() {
    var symbol = prompt('記号を入力');
    console.log(symbol);
    return symbol;
}

inputCalc();
document.write(sum);