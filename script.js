const numbers = document.querySelectorAll(".number");
const currentoperation = document.getElementById("currentoperation");
const clear = document.getElementById("reset");
const del = document.getElementById("delete");
const equal = document.getElementById("equal");
const operator = document.querySelectorAll(".operator")
const pastoperation = document.getElementById("pastoperation");

let operatorvalue= ''

numbers.forEach(div => div.addEventListener("click",() => {
    if(currentoperation.textContent == 0){
        currentoperation.textContent= ''
    }
    currentoperation.textContent += (div.textContent)
}))

clear.addEventListener("click",() => {
    currentoperation.textContent = ''
})

del.addEventListener("click",() => {
    currentoperation.textContent = (currentoperation.textContent).slice(0,-1)
})
operator.forEach(div => div.addEventListener("click",() => {
    if(currentoperation.textContent !==''){
        if(operatorvalue === ''){
            currentoperation.textContent +=div.textContent;
            operatorvalue =div.textContent
        } else{
            currentoperation.textContent= eval(currentoperation.textContent);
            currentoperation.textContent += div.textContent;
            operatorvalue = div.textContent;
        }
    }
}))

equal.addEventListener("click", () => {
    if (currentoperation.textContent !== '') {
        currentoperation.textContent = eval(currentoperation.textContent);
        operatorvalue = '';
    }
});
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.' || ['+', '-', '*', '/', 'Enter', 'Backspace', 'Escape'].includes(key)) {
        event.preventDefault(); 
        if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            currentoperation.textContent = currentoperation.textContent.slice(0, -1);
        } else if (key === 'Escape') {
            currentoperation.textContent = '';
        } else {
            currentoperation.textContent += key;
        }
    }
});
function calculate() {
    if (currentoperation.textContent !== '') {
        currentoperation.textContent = eval(currentoperation.textContent);
        operatorvalue = '';
    }
}
