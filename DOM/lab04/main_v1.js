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
    
    let isValid = true

    for (let input of allInput) {
        if (input.type !== 'submit') {
            if (!validateInput(input)) {
                isValid = false
                input.style.borderColor = 'red'
            } else {
                input.style.borderColor = '' // กำหนดเป็นค่าว่างเพื่อล้างสีกรอบทุกครั้งที่ validate ผ่าน
            }
        }
    }

    if (isValid) {
        window.location.href = 'https://www.example.com'
    }

}

const validateInput = input => {
    const value = input.value.trim()

    if (value === '' && (input.name === 'username' && value.length <= 3) && (input.name === 'password' && value.length <= 4)) {
        return false
    }

    return true
}

loginForm.addEventListener('submit', hdlLogin)