(function () {
    // const = 
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        // const target = e.target
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header__nav-link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return
        // if (burgerIcon) {
        //     e.preventDefault()
        // }
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
        // console.log('работает')
    }

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()
        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

    // document.addEventListener('keydown', event => {
    //     // console.log(event.code) - узнфть назавние кнопки по нажатию
    //     // if (event.code === 'Escape') {
    //     if (event.code === 'Escape' && document.body.classList.contains('body--opened-modal')) {
    //         // modal.classList.remove('modal--open')
    //         // modal.classList.toggle('modal--open')
    //         closeModal()
    //     }

    })()


// const btn = document.querySelector('.about__img-button')
// const modal = document.querySelector('.modal')
// const body = document.querySelector('.body')
// const cancel = document.querySelector('.modal__cancel')



// const openModal = () => {
//     // modal.classList.add('modal--opened')
//     body.classList.add('body--opened-modal')
// }

// const closeModal = () => {
//     // modal.classList.remove('modal--opened')
//     body.classList.remove('body--opened-modal')
// }


// // btn.addEventListener('click', () => {
// btn.addEventListener('click', openModal)
// // modal.classList.add('modal--open')
// // )}

// modal.addEventListener('click', event => {
//     const target = event.target
//     if (target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
//         // modal.classList.remove('modal--open')
//         closeModal()
//     }
// })

// document.addEventListener('keydown', event => {
//     // console.log(event.code) - узнать название кнопки по нажатию
//     // if (event.code === 'Escape') {
//     if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
//         // modal.classList.remove('modal--open')
//         // modal.classList.toggle('modal--open')
//         closeModal()
//     }
// })




// const btn = document.querySelector('.btn')
// btn.addEventListener('click', event => {
//     // console.log(event.target)
//     // event.target.classList.toggle('red')
//     event.currentTarget.classList.toggle('red')

// })