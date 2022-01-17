function func(arr) {
    let res;
    for (let i = 0; i < arr.length; i++) {
        res = arr[i] % 2 === 0;
        if (res === false) {
            return res;
        }
    }

    return res;
}

function every(arr, func) {
    return func(arr);
}

console.log(every([0, 4, 4], func));


module.exports = { every, func };