exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let min = array[0];
        for (let item of array) {
            min = Math.min(min, item);
        }
        return min;
    }
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let max = array[0];
        for (let item of array) {
            max = Math.max(max, item);
        }
        return max;
    }
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let item of array) {
            sum += item;
        }

        return sum / array.length;
    }
};
