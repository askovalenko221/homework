//while
let i = 0

while (i < 10) {
    i = i + 1
    console.log(i)
}

console.log('privet')


// do while  - выполняет действие do до тех пор пока не выполнится условие while

let n = 0
do {
    n++ //каждый цикл к 'n' будет прибавляться 1
    console.log(n)
} while (n < 5)



//// for 

for (let m = 1; m <= 10; m = m + 2) {
    console.log(`Пройден ${m} круг`)

}