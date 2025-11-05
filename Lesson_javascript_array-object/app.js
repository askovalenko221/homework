/* Theory

// const array = [1, 2, 3, 4, 5, 67, 111]
// // const arrayString = ['a', 'b', 's']
// //const array = new Array(1,2,3,4,5)

// //console.log(array.length)
// console.log(array[0])
// console.log(array[array.length]) // array[6] // В массиве 6 элементов, а индексов 5 
// console.log(array[array.length - 1])

// array[0] = 'privet!'
// console.log(array[0])
// array[array.length] = 'balbes'
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

//console.log(inputElement.value)

const notes = ['записать блок массивов', 'изучить эту херню']


createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    /*listElement.innerHTML = ` <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span>${inputElement.value}</span>
            <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
            </span>
            </li>` */

    listElement.insertAdjacentHTML("beforeend", ` <li
        class="list-group-item d-flex justify-content-between align-items-center"
        >
        <span>${inputElement.value}</span>
        <span>
            <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
        </span>
        </li>`
    )
    inputElement.value = ''
}