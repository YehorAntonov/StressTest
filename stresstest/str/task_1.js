function getDays(year, month) {
    const monthArr = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (year < 0 || month > 12 || month <= 0) {
        return 'Wrong value';
    }
    if (typeof month === 'string') {
        for (let i = 1; i <= monthArr.length; i++) {
            if (monthArr[i] === month) {
                return new Date(year, i, 0).getDate();
            }
        }
    }
    else if (typeof month === 'number') {
        return new Date(year, month, 0).getDate();
    }
    else {
        return 'Wrong value';
    }

}


module.exports = { getDays };