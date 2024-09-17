import { square, average, findMax, isEven, factorial } from './tests/math';
// 1
test('return the square of a number', () => {
    expect(square(5)).toBe(25);
    expect(square(-3)).toBe(9);
    expect(square(0)).toBe(0);
});
// 2
test('return the average of two numbers', () => {
    expect(average(10, 20)).toBe(15);
    expect(average(-5, 5)).toBe(0);
    expect(average(7, 3)).toBe(5);
});
// 3
test('return the maximum number from an array', () => {
    expect(findMax([1, 5, 9, 3])).toBe(9);
    expect(findMax([-1, -5, -9, -3])).toBe(-1);
    expect(findMax([0, 0, 0, 0])).toBe(0);
});
// 4
test('return true if the number is even', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(-2)).toBe(true);
    expect(isEven(0)).toBe(true);
});

test('return false if the number is odd', () => {
    expect(isEven(7)).toBe(false);
    expect(isEven(-5)).toBe(false);
});
// 5
test('return the factorial of a number', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(3)).toBe(6);
});
