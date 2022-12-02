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

const roshamboWinners = {
    "A": "C",
    "C": "B",
    "B": "A"
}

const convertPlayerTwo = {
    "X": "A",
    "Y": "B",
    "Z": "C",
}

const playRoshambo = (str1, str2) => {
    str2 = convertPlayerTwo[str2]

    if (str1 === str2) return getScore("draw") + getScore(str2);
    if (roshamboWinners[str1] === str2) return getScore("loss") + getScore(str2);
    if (roshamboWinners[str2] === str1) return getScore("win") + getScore(str2);
}

const getTotalScore = str => {
    const allRoundsArr = str.split("\n");
    let totalScore = 0;

    for (const round of allRoundsArr) {
        const roundArr = round.split(" ");
        const result = playRoshambo(roundArr[0], roundArr[1]);
        totalScore += result;
    }

    return totalScore
}

console.log(getTotalScore(input))
