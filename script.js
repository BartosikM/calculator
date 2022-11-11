const previousNumber = document.querySelector('.previousNumber p');
const currentNumber = document.querySelector('.currentNumber');
const mathSign = document.querySelector('.mathSign');
const clearButton = document.querySelector('.clear');
const operatorsButtons = document.querySelectorAll('.operator');
const numbersButton = document.querySelectorAll('.number');
const equalsButton = document.querySelector('.equals');
const historyBtn = document.querySelector('.history-btn');
const calculatorHistory = document.querySelector('.history');
let result ='';


function displayNumbers(){
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) {return}
    //if(this.textContent === '.' && currentNumber.innerHTML === '') return
   // currentNumber.innerHTML = '0.';

    currentNumber.innerHTML += this.textContent;
}
function operate(){
    if(currentNumber.innerHTML === '' && this.textContent === '-')
    { currentNumber.innerHTML = '-';
    return;}
    else if(currentNumber.innerHTML === '') {return;}
    if(mathSign.innerHTML !== '') {showResult()}
    mathSign.innerHTML = this.textContent;
    previousNumber.innerHTML = currentNumber.innerHTML;
    currentNumber.innerHTML = '';

}
function clearScreen(){
    currentNumber.innerHTML ='';
    previousNumber.innerHTML ='';
    mathSign.innerHTML= '';
    result = '';
}
function showResult(){
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator){
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case 'x':
        result = a * b;
        break;
        case ':':
        result = b / a;
        break;
        case '2^':
        result = b ** a;
        break;
    }
    addToHistory();
    historyBtn.classList.add('active');
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}
function addToHistory(){
    const newHistoryItem =document.createElement('li');
    newHistoryItem.innerHTML = `${currentNumber.innerHTML} ${mathSign.innerHTML} ${previousNumber.innerHTML} = ${result}`;
    newHistoryItem.classList.add('history-item');
    calculatorHistory.appendChild(newHistoryItem)
}
function clearHistory(){
    calculatorHistory.textContent = '';
    if(calculatorHistory.textContent ===''){historyBtn.classList.remove('active')}

}

clearButton.addEventListener('click', clearScreen);
operatorsButtons.forEach((button) => button.addEventListener('click', operate));
numbersButton.forEach((button) => button.addEventListener('click', displayNumbers));
equalsButton.addEventListener('click', showResult);
historyBtn.addEventListener('click', clearHistory);