const { Number } = require('../task_2');

describe('number is odd', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    let n1 = 79;
    let n2 = 6;

    test('is odd', () => {
        expect(n1.isOdd()).toBe(true);
    })
    test('is odd', () => {
        expect(n2.isOdd()).toBe(false);
    })
})