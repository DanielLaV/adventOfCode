input = require('./input')

const getHighestCalories = list => {
    let max = -Infinity;
    const str = list["input"];
    const calorieTotalArr = str.split(/\r?\n\n/);

    for (const sublist of calorieTotalArr) {
        const subtotal = sublist.split(/\r?\n/).reduce((sum, num) => sum + parseInt(num), 0);
        if (subtotal > max) max = subtotal;
    }

    return max;
}

console.log(getHighestCalories(input))
