let text = '';

const words = ['うんち', 'おっぱい', 'ちんちん'];

let display = document.getElementById('frame_inner');

let addWordBtn = document.createElement('button');
addWordBtn.innerHTML = 'ワード追加';
addWordBtn.addEventListener('click', () => {
    word = prompt('追加したいワードを入力してください');
    words.push(word);
});

let getTextBtn = document.createElement('button');
getTextBtn.innerHTML = 'テキストを検索';
getTextBtn.addEventListener('click', () => {
    text = prompt('診断したいテキストを入力してください');
    console.log(text);
    console.log('下品な単語は' + checkText() + '箇所あります');
});

let viewWordsBtn = document.createElement('button');
viewWordsBtn.innerHTML = 'ワード確認';
viewWordsBtn.addEventListener('click', () => {
    let str = '';
    for (let i = 0; i < words.length; i++) {
        str += words[i] + ' ';        
    }
    alert(str)
});

display.appendChild(addWordBtn);
display.appendChild(getTextBtn);
display.appendChild(viewWordsBtn);

function checkText () {
    let checkCounter = 0;
    for (let i = 0; i < words.length; i++) {
        let strLen = 0;
        let flag = false;
        do{
            strLen = text.indexOf(words[i], strLen) +1
            if(0 < strLen){
                checkCounter++;
                flag = true;
            } else {
                flag = false;
            }
        } while (flag);
    }
    return checkCounter;
}
