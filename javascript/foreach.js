const users = [
    { username: 'andy', password: '1234' },
    { username: 'bobby', password: '2345' },
    { username: 'candy', password: '3456' }
]

users.forEach((el) => {
    console.log(el.username)
})

users.forEach(el => console.log(el.username))

// find
// let au = users.find(el => {
//     return el.username === 'candy'
// })

// findIndex
let au = users.findIndex((el) => el.username === 'candy')

console.log('au =', au)
if (au == -1){
    console.log('not found')
}

// filter
let rs = users.filter( el => el.username.length> 4)
console.log(rs)