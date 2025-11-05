// =========== Операторы ============
// =========== Operators ============

let a = 10
let b = 5
let c = 32

// c = c + a
// c = c - a
// c = c * a
// c = c / a
c += a
c -= a
c *= a
c /= a

c = 4 ** 4 // возведение в степень 2

console.log(c)

// =========== Типы данных  ============
// =========== Data types ============

const age = 29 // number
const name = 'Aleks' //string
const isProgrammers = true // boolean
let x // underfined
//null
// console.log(typeof null)
// console.log(typeof (1 / x))
// console.log(typeof NaN)


// =========== Priority ============
const fullAge = 34
const birthYear = 1988
const currentYear = 2025
// > < >= <=
const isFullAge = currentYear - birthYear >= fullAge

console.log(isFullAge)

const num3 = 43
const num4 = '43'

console.log(num3 === num4)
