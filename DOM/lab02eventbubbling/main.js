const ctn = document.querySelector('.container')

const item04 = document.querySelector('.item04')

ctn.addEventListener('click', (e) => {
    console.log('Click on container')
})

item04.addEventListener('click', (e) => {
    console.log('Click on item04')
})

document.body.addEventListener('click', (e) => {
    console.log('Click on body')
})