let sum = 0;
let count = 0;
let input = prompt("กรุณากรอกตัวเลข");

while (input !== null && input !== "" && input !== "0" && Number(input) >= 0) {
  sum += Number(input);
  count++;
  input = prompt("กรุณากรอกตัวเลข");
}

if (count === 0) {
  console.log("ไม่มีตัวเลขที่ถูกกรอกเข้ามา");
} else {
  console.log(`ผลรวมของตัวเลขที่กรอกเข้ามาคือ ${sum}`);
  console.log(`ค่าเฉลี่ยของตัวเลขที่กรอกเข้ามาคือ ${sum / count}`);
}
