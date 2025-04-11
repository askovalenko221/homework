
// function sumNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// const result = sumNumbers(5,10)
// console.log(result)

// console.log(sumNumbers(3,7))

// const users = ['Maks', 'Nikita', 'Olga', 'Lena', 'Alex']
// const numbers = [1, 2, 3]

// function checkForCopyItem(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in array'
// }

// console.log(checkForCopyItem(users, 'Alex'))
// console.log(checkForCopyItem(numbers, 5))

const users = ['Maks', 'Nikita', 'Olga', 'Lena', 'Alex']
const numbers = [1, 2, 3]

const checkForCopyItem = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return `There is a copy of the ${item} in array`
        }
    }
    return 'There is no such item in array'
}

console.log(checkForCopyItem(users, 'Alex'))
console.log(checkForCopyItem(numbers, 5))
