function truncate(str, length) {
    if (str.length > length) {
      return str.slice(0, length - 1) + '…';
    } else {
      return str;
    }
  }
  
  // ตัวอย่างการใช้งาน
  console.log(truncate("What I'd like to tell on this topic is:", 20));
  // ผลลัพธ์: "What I'd like to te…"
  
  console.log(truncate("Hi everyone!", 20));
  // ผลลัพธ์: "Hi everyone!"
  