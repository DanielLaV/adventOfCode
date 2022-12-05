input = require('./input');

// return all stacks as a POJO of each stack
const getStacks = stacksStr => {
  const allStacksStr = stacksStr.split("\n\n")[0];
  let rows = allStacksStr.split("\n");
  const lastRow = rows[rows.length - 1];
  const stackLabels = lastRow.split("   ").map(num => parseInt(num)); // [1, 2, 3, ...]
  const numOfStacks = stackLabels[stackLabels.length - 1]; // 9

  rows = rows.slice(0, rows.length - 1);

  const stacks = {};

  for (const num of stackLabels) stacks[num] = [];

  for (const row of rows) {
    for (const num of stackLabels) {
      const indexOfCrate = 2 + (num - 1) * 4 - 1;
      let crate = row[indexOfCrate];

      if (crate !== undefined && crate !== " ") stacks[num].push(crate);
    }
  }

  return stacks;
}

const getMoves = str => {
  const allMovesStr = str.split("\n\n")[1].split("\n");
  const allMoves = [];

  for (const move of allMovesStr) {
    const fromSplit = move.split(" from ");
    const moveNum = fromSplit[0];
    const containers = fromSplit[1].split(" to ");
    const fromContainer = parseInt(containers[0]);
    const toContainer = parseInt(containers[1]);
    const numToMove = parseInt(moveNum.slice(5, moveNum.length));

    allMoves.push([numToMove, fromContainer, toContainer]);
  }

  return allMoves;
}

const moveCrates = (stacks, move) => {
  const [numToMove, fromStack, toStack] = move;
  const newStacks = stacks;

  const stackToMove = newStacks[fromStack].slice(0, numToMove);
  newStacks[fromStack] = newStacks[fromStack].slice(numToMove);
  newStacks[toStack] = [...stackToMove, ...newStacks[toStack]]

  return newStacks;
}

const main = str => {
  let stacks = getStacks(str);

  const moves = getMoves(str);

  for (const move of moves) {
    stacks = moveCrates(stacks, move);
  }

  let solution = '';

  for (const [key, values] of Object.entries(stacks)) {
    solution += values.shift();
  }

  return solution;
}

console.log(main(input));
