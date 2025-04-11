// 1) string
// 2) number
// 3) boolean
// 4) underfined
// 5) null
// 6) bigint
// 7) symbol

// 1
let instrument = 'Инструмент'
const box = 'ящик'
console.log(`${instrument} положили в ${box}`)

//2
instrument = 5
console.log(instrument)

//3
//true / false
// typeof - выводит Тип значения переменной

const user = 'Dima'
const age = 25
const isAdmin = true

console.log(`${user} admin: ${isAdmin}`)
console.log(typeof (instrument))
console.log(typeof (box))

//4
let foo
console.log(foo)

//5
let sum = null
console.log(sum)

//6 


//======Условия========//

const firstNumber = 5
const secondNumber = 10

// Не лучшая практика
// if (firstNumber == secondNumber) {  //дальше код выполнится если == приймет значение TRUE
//     const result = firstNumber + secondNumber
//     console.log(result)

// } else {   // выполнится если не выполнено первое условие
//     const result = secondNumber - firstNumber
//     console.log(result)
// }

//Лучшая практика DRY- dont repeat youself  (не повторять то, что можно написать Единожды)

let result = null
if (firstNumber == secondNumber) {  //дальше код выполнится если == приймет значение TRUE
    result = firstNumber + secondNumber
    console.log(result)

} else {   // выполнится если не выполнено первое условие
    result = secondNumber - firstNumber
    console.log(result)
}


const oneNumber = 5
const twoNumber = 20

let results = null
if (oneNumber === 10 || twoNumber == 20) {  //дальше код выполнится если == приймет значение TRUE
    results = oneNumber + twoNumber
    console.log(results)

} else {   // выполнится если не выполнено первое условие
    results = oneNumber + twoNumber
    console.log(results)
}

//================================
const alex = 'admin'

if (alex === 'user') {
    console.log('Alex is user')
} else if (alex === 'vip') {
    console.log('Alex is vip user')
} else
    console.log('Alex is admin')

//========= Тринарные операнды
const viktor = 'adminX'

viktor === 'admin' ? console.log('Viktor is admin') : console.log('Viktor is not admin')
