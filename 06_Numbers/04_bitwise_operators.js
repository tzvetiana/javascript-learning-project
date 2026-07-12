// & AND operator sets each bit to 1 if both bits are 1
// | OR operator sets each bit to 1 if one of two bits is 1
// ~ NOT operator inverts all bites

let bitwiseAnd = 5 & 1; // 0101 & 0001 = 0001
let bitwiseOr = 5 | 1; // 0101 | 001 = 0101
let bitwiseNot = ~5 // ~0101


console.log(bitwiseAnd); // 1  
console.log(bitwiseOr); // 5
console.log(bitwiseNot); // -6
