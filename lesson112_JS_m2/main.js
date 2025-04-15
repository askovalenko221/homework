
const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.querySelector('.body')

const openModal = () =>{
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}

const closeModal = () =>{
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}


// btn.addEventListener('click', () => {
btn.addEventListener('click', openModal) 
    // modal.classList.add('modal--open')
// )}

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        // modal.classList.remove('modal--open')
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    // console.log(event.code) - узнфть назавние кнопки по нажатию
    // if (event.code === 'Escape') {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        // modal.classList.remove('modal--open')
        // modal.classList.toggle('modal--open')
        closeModal()
    }
})
