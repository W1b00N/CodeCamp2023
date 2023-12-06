//Day 29
function convertFahrenheitToCelsius(fahrenheit) {
    // คำนวณอุณหภูมิในหน่วย Celsius
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
// ตัวอย่างการเรียกใช้ฟังก์ชัน
let fahrenheitTemperature = parseFloat(prompt('Enter the temperature in Fahrenheit:'));
let celsiusTemperature = convertFahrenheitToCelsius(fahrenheitTemperature);

console.log(`${fahrenheitTemperature} Fahrenheit is equal to ${celsiusTemperature.toFixed(2)} Celsius.`);
