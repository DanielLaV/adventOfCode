input = require('./input');

const findSubroutine = str => {

    for (let i = 0; i < str.length - 13; i++) {
        const subroutine = str.slice(i, i + 14).split('');
        let tracker = 0;

        for (let j = 0; j < subroutine.length; j++) {
            const sub = subroutine.slice();
            const letter = sub[j];
            sub.splice(j, 1);

            if (!sub.includes(letter)) tracker++;
            else break;
        }
        if (tracker === 14) return i + 14;
    }
    return "No subroutine found";
}
console.log(findSubroutine(input));
