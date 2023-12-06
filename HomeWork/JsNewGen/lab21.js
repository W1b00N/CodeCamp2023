let arr = [1, [2, [[[3, 4], 5], 6]]];
let [a, [b, [[, c], d]], e, f] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5
console.log(f); // 6
// VM79:6 1
// VM79:7 2
// VM79:8 5
// VM79:9 6
// VM79:10 undefined
// VM79:11 undefined