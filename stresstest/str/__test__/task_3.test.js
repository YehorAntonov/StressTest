const { every, num } = require('../task_3');

describe('every even number', () => {
    test('test', () => {
        expect(true).toBe(true);
    })


    test.each([
        [[0, 4, 4], func, true],
        [[4, 5, 8, 2], func, false]
    ])('every', function (arr, func, result) {
        expect(every(arr, func)).toBe(result);
    })
})