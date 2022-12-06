input = require('./input');

const findSubroutine = str => {

    for (let i = 0; i < str.length - 3; i++) {
        const subroutine = str.slice(i, i + 4).split('');
        let tracker = 0;

        for (let j = 0; j < subroutine.length; j++) {
            const sub = subroutine.slice();
            const letter = sub[j];
            sub.splice(j, 1);

            if (!sub.includes(letter)) tracker++;
            else break;
        }
        if (tracker === 4) return i + 4;
    }
    return "No subroutine found";
}
console.log(findSubroutine(input));
