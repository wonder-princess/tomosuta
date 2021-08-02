let display = document.getElementById('frame_inner');

let p = document.createElement('p');
display.appendChild(p);

let label = document.createElement('label');
label.innerHTML = 'メールアドレス：';
p.appendChild(label);

let inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('name', 'email');
inputEmail.id = '';
p.appendChild(inputEmail);

console.log(p);

let comment = document.createElement('p');
p.appendChild(comment);

let mailReg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;

inputEmail.addEventListener('blur', () => {
    if (mailReg.test(inputEmail.value)) {
        comment.innerHTML ='';
    } else {
        inputEmail.style.backgroundColor ='#fcc';
        comment.innerHTML = 'メールアドレスをご寄付ください';
        comment.style.color = '#f33';
    }
});






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