//Day 29
// รับตัวเลขจากผู้ใช้
let number1 = parseInt(prompt('กรุณาป้อนตัวเลขที่ 1:'));
let number2 = parseInt(prompt('กรุณาป้อนตัวเลขที่ 2:'));
let number3 = parseInt(prompt('กรุณาป้อนตัวเลขที่ 3:'));

// เก็บตัวเลขในอาร์เรย์
let numbers = [number1, number2, number3];

// เรียงลำดับตัวเลขจากมากไปน้อย
numbers.sort(function(a, b) {
    return b - a;
});

// แสดงผลลัพธ์
console.log('ตัวเลขที่เรียงกันจากมากไปน้อย:', numbers);
