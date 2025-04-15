const btn = document.querySelector('.btn')
const text = document.querySelector('.text')

btn.addEventListener ('click', () => {
    // console.log(text.classList)
    // text.classList.toggle('red')
    text.classList.toggle('move')
    // text.classList.remove('red')
    if (text.classList.contains('move')) {
        text.textContent = 'я двигаюсь'
    } else {
        text.innerText = 'Текст'
    }
})

// console.log(text.classList)