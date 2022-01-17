Number.prototype.isOdd = function() {
    if (this.valueOf() % 2 === 0) {
        return false;
    } else {
        return true;
    }
}



module.exports = { Number };