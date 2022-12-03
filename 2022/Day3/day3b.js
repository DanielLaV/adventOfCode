input = require('./input')

const priorities = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getSumOfPrioritiesOfThreesome = str => {
  const rucksacks = str.split("\n");
  let sumOfPriorities = 0;

  for (let i = 0; i < rucksacks.length; i+=3) {
    const firstRucksack = rucksacks[i];
    const secondRucksack = rucksacks[i + 1];
    const thirdRucksack = rucksacks[i + 2];

    for (const letter of firstRucksack) {
      if (secondRucksack.indexOf(letter) !== -1 && thirdRucksack.indexOf(letter) !== -1) {
        sumOfPriorities += priorities.indexOf(letter);
        break;
      }
    }
  }

  return sumOfPriorities;
}


console.log(getSumOfPrioritiesOfThreesome(input))
