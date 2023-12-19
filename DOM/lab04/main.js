const loginForm = document.querySelector('.login-form')
// const inp_username = document.querySelector('#username')
// const inp_password = document.querySelector('#password')


// โจทย์ให้สร้าง code เพื่อ varidate(ตรวจสอบ) ค่าที่ submit จาก form ดังนี้
// 1. ทุก input ต้องไม่เป็นค่าว่าง
// 2. username > 3 ตัวอักษร
// 3. password > 4 ตัวอักษร

// ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
// ถ้า validate ผ่าน ให้ไปที่ https://www.example.com
const hdlLogin = e => {
    e.preventDefault()
    console.log(loginForm.elements)
    let allInput = loginForm.elements
    
    let inputObj = {}
    for (let el of allInput) {
        inputObj[el.id] = el.value
    }
    // console.log(allInput[0].value)
    // console.log(allInput['username'].value)
    // console.log(allInput['password'].value)
    // console.log(allInput['gender'].id)
    // console.log(inp_username.value)
    // console.log(inp_password.value)

}

const validateInput = input => {
    if (input.password.length < 4) {
        return false
    }
    return true
}

loginForm.addEventListener('submit', hdlLogin)