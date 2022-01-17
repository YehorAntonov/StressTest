const { getDays } = require('../task_1');

describe('get days', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test.each([
        [1999, 4, 30],
        [2012, 2, 29],
        [2015, 2, 28],
        [2021, 'February', 28],
        [2021, 'July', 31],
        [2021, [2], 'Wrong value'],
        [-2, 5, 'Wrong value']
    ])('get days', function (arg1, arg2, result) {
        expect(getDays(arg1, arg2)).toBe(result);
    });
})