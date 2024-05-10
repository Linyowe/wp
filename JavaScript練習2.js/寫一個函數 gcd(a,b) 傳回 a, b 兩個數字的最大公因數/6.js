if (b === 0) {
    return a;
} else {
    return gcd(b, a % b);
}
var num1 = 12;
var num2 = 18;
console.log("最大公因數:", gcd(num1, num2));
