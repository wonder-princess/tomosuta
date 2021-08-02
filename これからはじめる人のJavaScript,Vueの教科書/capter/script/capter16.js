const primeNumbers = [2, 3, 5, 7];
let displayNum = "";
let taskNum = "";
let inputValuesArr = [];

let display = document.getElementById('frame_inner');

createValue();
displayNum = taskNum;

let question = document.createElement('p');
question.innerHTML = displayNum;
display.appendChild(question);

let numBtn2 = document.createElement('button');
numBtn2.innerHTML = '2';
numBtn2.addEventListener('click', () => {
    inputValuesArr.push(2);
    displayInputValues();
});

let numBtn3 = document.createElement('button');
numBtn3.innerHTML = '3';
numBtn3.addEventListener('click', () => {
    inputValuesArr.push(3);
    displayInputValues();
});

let numBtn5 = document.createElement('button');
numBtn5.innerHTML = '5';
numBtn5.addEventListener('click', () => {
    inputValuesArr.push(5);
    displayInputValues();
});

let numBtn7 = document.createElement('button');
numBtn7.innerHTML = '7';
numBtn7.addEventListener('click', () => {
    inputValuesArr.push(7);
    displayInputValues();
});

let ansBtn = document.createElement('button');
ansBtn.innerHTML = '回答';
ansBtn.addEventListener('click', () => {
    let val = 1;
    for (let num of inputValuesArr) {
        val *= num;
    }
    if (val == taskNum) {
        document.write("正解");
    } else {
        document.write("不正解");
    }
});

let deleteBtn = document.createElement('button');
deleteBtn.innerHTML = '1文字削除';
deleteBtn.addEventListener('click', () => {
    inputValuesArr.pop();
    displayInputValues();
});

display.appendChild(numBtn2);
display.appendChild(numBtn3);
display.appendChild(numBtn5);
display.appendChild(numBtn7);
display.appendChild(ansBtn);
display.appendChild(deleteBtn);


let inputValues = document.createElement('p');
display.appendChild(inputValues);

function createValue() {
    
    // 名前絶対気がするうううう
    maxTermNum = 4;
    minTermNum = 2;
    termNum = Math.floor(Math.random() * (maxTermNum+1 - minTermNum)) + minTermNum;

    primeNum = primeNumbers[Math.floor(Math.random() * primeNumbers.length)];
    for (let i = 0; i < termNum-1; i++) {
        primeNum *= primeNumbers[Math.floor(Math.random() * primeNumbers.length)];   
    }
    taskNum = primeNum;
}

function displayInputValues() {
    let str = "";
    if (inputValuesArr.length == 1) {
        str += inputValuesArr[0];
    } else {
        str += inputValuesArr[0];
        for (let i = 1; i < inputValuesArr.length; i++) {
            str += " × " + inputValuesArr[i];
        }
    }
    inputValues.innerHTML = str;
}