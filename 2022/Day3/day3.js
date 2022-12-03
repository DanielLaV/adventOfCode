input = require('./input')

const priorities = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getSumOfPriorities = str => {
  const rucksacks = str.split("\n");
  let sumOfPriorities = 0;

  for (const rucksack of rucksacks) {
    const firstCompartment = rucksack.slice(0, rucksack.length / 2);
    const secondCompartment = rucksack.slice(rucksack.length / 2, rucksack.length);

    for (const letter of firstCompartment) {
      if (secondCompartment.indexOf(letter) !== -1) {
        sumOfPriorities += priorities.indexOf(letter);
        break;
      }
    }
  }

  return sumOfPriorities;
}


console.log(getSumOfPriorities(input))
