// const element = document.querySelector('.block')

// element.textContent = 'text'
// element.id = 1564

// element.style.color = 'green'
// element.style.fontSize = '30px'
// console.log(element)


// const element = document.querySelector('div')
// console.log(element)

const elements = document.querySelectorAll('div')
// console.log(element[3])

elements.forEach((element) => {
    // console.log(element)
    element.style.color = 'blue'
});