const h = 0.01;
function f(p) {
    const [x, y] = p;
    return x * x + y * y;
}
function partialDerivative(f, p, k) {
    const p1 = p.slice();
    p1[k] += h;
    return (f(p1) - f(p)) / h;
}
function gradient(f, p) {
    const gp = p.slice();
    for (let k = 0; k < p.length; k++) {
        gp[k] = partialDerivative(f, p, k);
    }
    return gp;
}
const [x, y] = [1, 3];
console.log('x=', x, 'y=', y);
console.log('df(f(x,y), 0) = ', partialDerivative(f, [x, y], 0));
console.log('df(f(x,y), 1) = ', partialDerivative(f, [x, y], 1));
console.log('grad(f)=', gradient(f, [x, y]));
