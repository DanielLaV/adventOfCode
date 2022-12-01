input = require('./input')

const getSumOfHighestThree = list => {
    const str = list["input"];
    const calorieTotalArr = str.split(/\r?\n\n/);
    const numArr = [];

    for (const sublist of calorieTotalArr) {
        const subtotal = sublist.split(/\r?\n/).reduce((partialSum, a) => partialSum + parseInt(a), 0);
        numArr.push(subtotal);
    }

    const sorted = numArr.sort((a, b) => b - a)

    const sumOfLargestThree = sorted[0] + sorted[1] + sorted[2];

    return sumOfLargestThree;
}

console.log(getSumOfHighestThree(input))
