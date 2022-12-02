input = require('./input')

const scorer = {
    "A": 1,
    "X": 1,
    "B": 2,
    "Y": 2,
    "C": 3,
    "Z": 3,
    "loss": 0,
    "draw": 3,
    "win": 6
};

const getScore = str => scorer[str];
// key beats value
const roshamboWinners = {
    "A": "C",
    "C": "B",
    "B": "A"
}
// key loses to value
const roshamboLosers = {
    "A": "B",
    "C": "A",
    "B": "C"
}

const getPlayerTwoMove = (str1, str2) => {
    if (str2 === "X") return roshamboWinners[str1];
    if (str2 === "Y") return str1;
    if (str2 === "Z") return roshamboLosers[str1];
}

const playRoshambo = (str1, str2) => {
    if (str1 === str2) return getScore("draw") + getScore(str2);
    if (roshamboWinners[str1] === str2) return getScore("loss") + getScore(str2);
    if (roshamboWinners[str2] === str1) return getScore("win") + getScore(str2);
}

const getTotalScore = str => {
    const allRoundsArr = str.split("\n");
    let totalScore = 0;

    for (const round of allRoundsArr) {
        const roundArr = round.split(" ");
        const playerTwo = getPlayerTwoMove(roundArr[0], roundArr[1])
        const result = playRoshambo(roundArr[0], playerTwo);
        totalScore += result;
    }

    return totalScore
}

console.log(getTotalScore(input))
