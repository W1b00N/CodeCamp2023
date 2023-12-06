function Accumulator(startingValue) {
    this.currentValue = startingValue;

    this.read = function() {
        let userInput = parseFloat(prompt('Enter a value:'));
        if (!isNaN(userInput)) {
            this.currentValue += userInput;
        } else {
            alert('Invalid input. Please enter a valid number.');
        }
    };

    this.show = function() {
        alert(`Current Value: ${this.currentValue}`);
    };
}

// ตัวอย่างการใช้งาน Constructor Function
let accumulator = new Accumulator(10); // กำหนด startingValue เป็น 10
accumulator.read(); // กรอกค่า, เช่น 5
accumulator.show(); // แสดงค่าปัจจุบัน, คือ 15
