

//Variables
const numberOne = 29
const numberTwo = 13

let numOneEl = document.querySelector('.numberOne')
let numTwoEl = document.querySelector('.number2')

numOneEl.textContent = numberOne
numTwoEl.textContent = numberTwo

const answerDisplay = document.querySelector('.answer')
const additionBtn = document.getElementById('add-btn')
const subtractionBtn = document.getElementById('sub-btn')
const multiplyBtn = document.getElementById('multiply-btn')
const divideBtn = document.getElementById('divide-btn')
const clearBtn = document.querySelector(".clear")


//EventListeners
additionBtn.addEventListener("click", addNumbers)
subtractionBtn.addEventListener("click" , subtractNumbers)
multiplyBtn.addEventListener("click", multiplyNumbers)
divideBtn.addEventListener("click" , divideNumbers)
clearBtn.addEventListener("click", clear)


//functions 

function addNumbers() {
   sum =  numberOne + numberTwo
   answer()
}

function subtractNumbers() {
    sum = numberOne - numberTwo
    answer()
}

function multiplyNumbers () {
    sum = numberOne * numberTwo
    answer()
}

function divideNumbers (){
    sum = numberOne / numberTwo
    answer()
}

function answer() {
    answerDisplay.textContent += sum
}


function clear() {
    answerDisplay.textContent = 'Answer: '
}