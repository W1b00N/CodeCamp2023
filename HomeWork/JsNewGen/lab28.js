const users = [ { user: "Name1" },{ user: "Name2", age: 2 },{ user: "Name2" },{ user: "Name3", age: 4 }];
  for (const { user, age = "unknown" } of users) {
    console.log(`${user} - Age: ${age}`);
  }
// ตอบ 
//   VM91:9 Name1 - Age: unknown
//   VM91:9 Name2 - Age: 2
//   VM91:9 Name2 - Age: unknown
//   VM91:9 Name3 - Age: 4