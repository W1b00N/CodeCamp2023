const root = document.querySelector('#root')

// ******reference form index for create tag******
/* 
<div class="counter">
        <button class="btn btn-inc">+</button>
        <h3 class="number">0</h3>
        <button class="btn btn-dec">-</button>
        <button class="btn btn-clr">C</button>
</div> 
*/

// ***** DOM create element from above *****
// const counter = document.createElement('div')
// counter.setAttribute('class','counter')

// const btnInc = document.createElement('button')
// button.setAttribute('class','btn btn-inc')
// button.textContent = '+'

// const btnDec = document.createElement('h3')
// button.setAttribute('class','btn btn-dec')
// button.textContent = '0'


// *******DOM create element with function ******
function makeElement(tag, att_n, att_v, content) {
    let output = document.createElement(tag)
    output.setAttribute(att_n, att_v)
    output.textContent = content
    return output
}

let countNum = 0


// *******function update counter ****
function updateCounter(n) {
    if (countNum + n < 0) {
        return
    }
    countNum += n
    number.textContent = countNum
}

// DOM make element
const counter = makeElement('div', 'class', 'counter', '')
const btnInc = makeElement('button', 'class', 'btn-inc', '+')
const number = makeElement('h3', 'class', 'number', '0')
const btnDec = makeElement('button', 'class', 'btn-dec', '-')
const btnClr = makeElement('button', 'class', 'btn-clr', 'C')

//DOM make event
btnInc.addEventListener('click', () => updateCounter(1))
btnDec.addEventListener('click', () => updateCounter(-1))
btnClr.addEventListener('click', () => updateCounter(-countNum))

//DOM send to UI
counter.append(btnInc)
counter.append(number)
counter.append(btnDec)
counter.append(btnClr)
root.append(counter) // ให้ id root แสดงผล

