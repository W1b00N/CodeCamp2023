let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // *  การนำค่าจาก array ที่ 2 มาใส่ใน array แรก ทำให้ค่าของ elements ที่ index 1 และ 2 ถูกสลับกัน
// ตอบ 
// VM48:3 (3) [10, 30, 20]