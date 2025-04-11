// 1)
function users(name) {
    return 'Hello ' + name
}
console.log(users('Alex'))


// 2)
const numbers = [2, 6, 8, 10, 12, 14, 16, 18, 20]
const numbers2=[1,3,5,2,4,3,11,13,17,18,19,54,]
function listNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
    console.log('больше нет подходящих значений')
}
listNumbers(numbers2)




// 3)
let result = null
function calculate(firstCounts, secondCounts, action) {
    if (action === 'plus') {
        const result = firstCounts + secondCounts
        return result
    } else if (action === 'minus') {
        const result = firstCounts - secondCounts
        return result
        // console.log(result)
    } else if (action === 'multiplication') {
        const result = firstCounts * secondCounts
        return result
    } else if (action === 'division') {
        const result = firstCounts / secondCounts
        return result
    } else
        // const result = 'Не верно заданы параметры'
        return 'Не верно заданы параметры'
}
console.log(calculate(27, 9, 'division'))