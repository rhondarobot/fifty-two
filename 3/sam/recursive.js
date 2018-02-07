const countdown = function(value) {
    if (value >= 1) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
};

countdown(10);
