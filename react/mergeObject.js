let obj1 = { name: "Andy", age: 25 }
let obj2 = { gender: "M", age: 30 }
let obj3 = { name: "Bobby", age: 35 }
//จากหน้าไปหลัง
// function mergeObject(...all) {
//     let output = {}
//     for(let el of all) {
//         output = {...el, ...output }
//     }
//     return output
// }
//จากหลังมาหน้า
// function mergeObject(...all) {
//     let output = {}
//     for(let i=all.length-1; i>=0; i--) {
//         output = {...output, ...all[i]}
//     }
//     return output
// }

// function mergeObject(...all) {  
//     all.reverse()
//     let output = all.reduce( (a, c) => {
//         return ({...a, ...c})
//     }, {})
//     return output
// }
//แบบย่อ
// function mergeObject(...all) {  
//     return (all.reverse().reduce( (a, c) => ({...a, ...c}), {}))
// }
//แบบย่อไปอีก
// const mergeObject = (...all) => (all.reverse().reduce( (a, c) => ({...a, ...c}), {}))

const mergeObject = (...all) => (all.reduce((a, c) => ({ ...c, ...a }), {}))

console.log(mergeObject(obj1, obj2, obj3))  // {name: 'Andy', age: 25, gender: 'M'}
console.log(mergeObject(obj2, obj3, obj1))  // {name: 'Bobby', age: 30, gender: 'M'}