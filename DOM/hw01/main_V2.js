const root = document.querySelector('#root')
const btnAdd = document.querySelector('.btn-add')

function Counter() {
    // *******DOM create element with function ******
    const makeElement = (tag, att_n, att_v, content) => {
        let output = document.createElement(tag)
        output.setAttribute(att_n, att_v)
        output.textContent = content
        return output
    }

    let countNum = 0


    // *******function update counter ****
    const updateCounter = (n) => {
        if (countNum + n < 0) {
            return
        }
        countNum += n
        number.textContent = countNum
    }

    const removeCounter = (e) => {
        // root.removeChild(counter)
        console.log(e.target.closest('.counter'))
        e.target.closest('.counter').remove()
    }

    // DOM make element
    const counter = makeElement('div', 'class', 'counter', '')
    const btnInc = makeElement('button', 'class', 'btn-inc', '+')
    const number = makeElement('h3', 'class', 'number', '0')
    const btnDec = makeElement('button', 'class', 'btn-dec', '-')
    const btnClr = makeElement('button', 'class', 'btn-clr', 'C')
    const btnDel = makeElement('button', 'class', 'btn-del', 'remove')

    //DOM make event
    btnInc.addEventListener('click', () => updateCounter(1))
    btnDec.addEventListener('click', () => updateCounter(-1))
    btnClr.addEventListener('click', () => updateCounter(-countNum))
    btnDel.addEventListener('click', removeCounter)

    

    //DOM send to UI
    counter.append(btnInc ,number, btnDec, btnClr, btnDel)
    // counter.append(btnInc)
    // counter.append(number)
    // counter.append(btnDec)
    // counter.append(btnClr)
    return counter
}
const hdlAddCounter = () => {
    root.append(Counter())
}
btnAdd.addEventListener('click', hdlAddCounter)

