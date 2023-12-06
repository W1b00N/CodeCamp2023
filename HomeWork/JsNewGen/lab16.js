function getUserData({ firstName, favoriteColor = 'green' }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
   }
   getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
   getUserData({ firstName: 'Melissa' }); // **
   getUserData({}); // ***
// ตอบ 
//    'Your name is undefined and you like green'
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); getUserData โดยส่ง object ที่มี property firstName และ favoriteColor ซึ่งได้ผลลัพธ์เป็น "Your name is Alejandro and you like purple"
// getUserData({ firstName: 'Melissa' }); โดยส่ง object ที่มีเฉพาะ property firstName โดยที่ไม่ได้ระบุ favoriteColor ซึ่งได้ผลลัพธ์เป็น "Your name is Melissa and you like green"
// getUserData({}); โดยส่ง object ที่ไม่มีค่าใดๆ ซึ่งได้ผลลัพธ์เป็น "Your name is undefined and you like green"