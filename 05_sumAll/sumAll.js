const sumAll = function(num1, num2) {
    let addingUp = 0;
    while (addingUp < num2) {
        addingUp = num1 + 1;
    }

    let finalSum = num1 + addingUp + num2;
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
