// 1
export function square(num) {
    return num * num;
}
// 2
export function average(a, b) {
    return (a + b) / 2;
}
// 3
export function findMax(arr) {
    return Math.max(...arr);
}
// 4
export function isEven(num) {
    return num % 2 === 0;
}
// 5
export function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}