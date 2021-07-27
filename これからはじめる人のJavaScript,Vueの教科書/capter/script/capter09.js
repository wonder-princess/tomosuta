document.write('<div>test1</div>');

let display = document.getElementById('frame_inner');
let div = document.createElement('div');
let p = document.createElement('p');

div.setAttribute("id", "test");
div.innerHTML = 'test2';

display.appendChild(div);

createSomeText(5);

function createSomeText(num) {
    let content = document.createElement('div');
    display.appendChild(content);
    for (i=0; i<num; i++) {
        let p = document.createElement('p');
        let text = document.createTextNode('text' + (i+1));
        content.appendChild(p);
        p.appendChild(text);
    }
}