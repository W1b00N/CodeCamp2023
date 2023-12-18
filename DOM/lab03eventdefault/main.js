const nav = document.querySelector('nav');
const blacklist = ['example', 'w3schools']
console.log(nav.children)

const aClick = (e) => {
    // ถ้าใครเข้า link ที่เป็น blacklist ให้ alert('No, Is a Blacklist) แล้วไปที่ wikipedia
    e.preventDefault()
    console.log(e.target.href)

    let foundItem = blacklist.find(el => e.target.href.includes(el))
    if (!foundItem) {
        location.assign(e.target.href)
        return
    }
    alert(`Stop to go ${foundItem}`)
    window.location.assign('http://wikipedia.org')
}
for (let el of nav.children) {
    el.addEventListener('click', aClick)
}