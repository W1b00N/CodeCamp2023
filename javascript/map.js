const users = [
    { username: 'andy', password: '1234', gender: "male" },
    { username: 'bobby', password: '2345', gender: "male" },
    { username: 'candy', password: '3456', gender: "female" }
]

// let rs = users.map( el => {
//     return "CodeCamp"
// })

// console.log(rs)

// reset password all
// let rs = users.map((el) => {
//     return ({
//         username : el.username,
//         password : el.password = '7777',
//         gender : el.gender
//     }) 
// })
// console.log(rs)

// // reset เฉพาะ ผู้ชาย
// let onlyM = users.filter((el) => {
//     return el.gender === 'male'
// })
// let rs = onlyM.map(el => ({
//     username: el.username,
//     password: '7777'
// }))
// console.log(rs)

// reset เฉพาะ ผู้ชาย แบบย่อ
let rs = users
    .filter(el => el.gender === 'male')
    .map(el => ({
        username: el.username,
        password: '7777',
        gender: el.gender
    }))
console.log(rs)