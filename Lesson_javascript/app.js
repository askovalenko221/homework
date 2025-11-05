let num = 42
let firstName = 'kokos'
const isProgrammer = true

//comment
/* 
comment
*/

/*Can Do - Что можно
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let num_ = 12
let _num =12
let first_name = 'diman' // bad
let firstName = 'Dimas' //good
let num42 = 10
*/

/*Restricted - Нельзя
let 42num = '11'
let my-num = 1
let const
*/

// firstName = 'Diman'

// //alert(num)  // Выводит сообщение на странице по верх всего

// console.log('Имя:',firstName)
// console.log('возраст:',num)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

// let num2 = num + 10
// // console.log(num, num2)
// // num = num2 - num
// // console.log(num, num2)
// // num2 = num2 + 1
// // console.log(num, num2)

// let num3 = num + 10 * 2 / 5 - 1
// console.log(num, num2, num3)


// const fullName = firstName + ' ' + 'Dimanov'
// console.log(fullName)

// console.log(resultElement.textContent)
// resultElement.textContent = 42

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'


plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    }
    else {
        resultElement.style.color = 'blue'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    // if (actionSymbol = '+') {
    //     return num1 + num2
    // }
    // else if (actionSymbol = '-') {
    //     return num1 - num2
    // }
    
    /*Тернарное выражение условия*/
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    // } else if (action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }
}


// console.log(input1.value, '', input2.value)
// console.log(typeof sum)