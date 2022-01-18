let value = [];
let display = [];
let output = document.querySelector('.output');
function addtion() {
    value = [eval(value.join(""))];
    display = [`${value}+`];
    display.join("");
    console.log(display);
    output.innerText = display;
    value.push('+');
}
function subtraction() {
    value = [eval(value.join(""))];
    display = [`${value}-`];
    display.join("");
    output.innerText = display;
    value.push('-');
}
function multiplication() {
    value = [eval(value.join(""))];
    display = [`${value}\u00d7`];
    display.join("");
    output.innerText = display;
    value.push('*');
}
function division() {
    value = [eval(value.join(""))];
    display = [`${value}\u00F7`];
    display.join("");
    output.innerText = display;
    value.push('/');
}
function clear() {
    value = [''];
    display = [''];
    output.innerText = display;
}
function undo() {
    display = value.join("");
    value = [display.substring(0, display.length - 1)];
    output.innerText = display;
}
function equal() {
    value = [eval(value.join(""))];
    if(eval(value.join("")) === 0) {
        clear();
        output.innerText = '0';
    } else {
    display = value;
    output.innerText = display;
    }
}
document.querySelector('.calculator').addEventListener('click', function(event){
    input = event.target.innerText;
     if(input === '=') {
           equal();
        } else if(input === '+') {
            addtion();
        } else if(input === '-') {
            subtraction();
        } else if(input === '\u00d7') {
            multiplication();
        } else if(input === '\u00F7') {
            division();
        } else if(input === 'C') {
            clear();
        } else if(input === '\uD83E\uDC28') {
            undo();
        }
         else {
            value.push(input);
            display.push(input);
            console.log(value.join(""));
            output.innerText = display.join("");
             }
            
        
});
