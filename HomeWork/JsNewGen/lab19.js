let user = {
    name: 'John',
    years: 27
  };
  let { name, years: age, isAdmin = false } = user;
  console.log(name); // 'John'
  console.log(age); // 27
  console.log(isAdmin); // false
//   VM68:9 John
//   VM68:10 27
//   VM68:11 false