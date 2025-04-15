const button = document.querySelector('.btn')
let btnIsRed = false


button.addEventListener('click', () => {
    // console.log('клик сработал')
    // button.style.backgroundColor = 'red'
    if (btnIsRed) {
        button.style.backgroundColor = 'blue'
        btnIsRed = false
    } else {
        button.style.backgroundColor = 'red'
        btnIsRed = true
    }
})

function scrolling() {
    console.log('scroll')
}


document.addEventListener('scroll', scrolling)
// document.addEventListener('scroll', () => {
//     console.log('scroll')
// })