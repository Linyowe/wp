function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

var num1 = 12;
var num2 = 18;
console.log("最小公倍數:", lcm(num1, num2));
