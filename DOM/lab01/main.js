//********getElement*************
// let h1 = document.getElementsByTagName('h1');

// console.log(h1);
// console.log(h1[0]);

// h1[0].style.color = 'red';

// let p = document.getElementsByTagName('p');
// console.log(p);

// p[2].innerText = 'CodeCamp Academy 01'

// //เปลี่ยน p ทั้ง 4 ให้แสดงคำว่า codecamp academy 1 - 4  
// // for (let i = 0; i <= p.length; i++) {
// //     p[i].innerText = `CodeCamp Academy 1${i+1}`
// // }

// let i = 1
// for(let el of p) {
//     el.innerText = `CodeCamp Academy 0${i++}`
// }

// let ctn = document.getElementsByClassName('container')
// console.log(ctn[0])
// ctn[0].style.background = 'skyblue'

// let para1 = document.getElementById('para1')
// console.log(para1)

// para1.innerText = new Date()



//****************queryselector**************
// let p3 = Document.querySelector('.item03')
// console.log(p3)

// p3.innerText = 'Good day'

// let allp = document.querySelectorAll('.item')
// console.log(allp)

// allp.forEach((el,i) => {
//     el.innerText = `CodeCamp Academy 0${i}`
// })

// let qpara1 = document.querySelector('#para1')
// console.log(qpara1)
// qpara1.computedStyleMap.color = 'blue'

// let qa_para1 = document.querySelectorAll('#');
// console.log(qa_para1[0])

// ******การ matched******
// let p = document.querySelectorAll('p')
// console.log(p)

// console.log(p[0].matches('#para1'))
// console.log(p[1].matches('#para1'))

// *****closest********
// let item03 = document.querySelector('.item03')
// console.log(item03)

// let ctn = item03.closest('.container')
// console.log(ctn)


//***contains*****
// let container = document.querySelector('.container');
// let para1 = document.querySelector('#para1')

// // ****nodetype********

// let ctn = document.querySelector('.container')
// console.log(ctn.childNodes[0].nodeType)
// console.log(ctn.childNodes[1].nodeType)

//****contents*****

// let para1 = document.querySelector('#para1');
// para1.innerHTML='Codecamp<br<em>Academy</em>'
// para1.innertext='Codecamp<br<em>Academy</em>'
// para1.textContent = 'Codecamp<br<em>Academy</em>'

// console.log(para1.outerHTML)
// para1.outerHTML = '<img src="http://picsum.photos/100">'

// *******Attributes *******
let para1 = document.querySelector('#para1');
console.log(para1.attributes)
console.log(typeof para1.attributes)
// console.log(Array.isArray(para1.attributes))
console.log(para1.attributes[1].value)
console.log(para1.hasAttribute('id'))
console.log(para1.hasAttribute('idx'))
console.log(para1.getAttribute('class'))
para1.setAttribute('name', 'first-line')
console.log(para1)