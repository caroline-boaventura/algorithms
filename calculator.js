const calculator = {
    addition: (array) => {
        return array.reduce((acc, currentValue) => {
            acc = acc + currentValue;
            return acc;
        }, 0)
    },
    subtraction: (array) => {
        return array.reduce((acc, currentValue, index) => {
            if (index === 0) {
                acc = currentValue; 
            } else {
                acc = acc - currentValue;
            }
            return acc;
        }, 0)
    },
    multiplication: (array) => {
        return array.reduce((acc, currentValue, index) => {
            if (index === 0) {
                acc = currentValue; 
            } else {
                acc = acc * currentValue;
            }
            return acc;
        }, array[0])
    },
    division: (a, b) => {
        if (b === 0) throw new Error('The divisor cannot be 0');

        return (a / b);
    }
}

module.exports = calculator;