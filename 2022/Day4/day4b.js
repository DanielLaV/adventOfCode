input = require('./input')

const areContained = pair => {
  let [range1, range2] = pair.split(',')
  let [start1, end1] = range1.split('-');
  let [start2, end2] = range2.split('-');

  range1 = parseInt(range1);
  range2 = parseInt(range2);
  start1 = parseInt(start1);
  start2 = parseInt(start2);
  end1 = parseInt(end1);
  end2 = parseInt(end2);

  if (
      start1 >= start2 && start1 <= end2 ||
      end1 >= start2 && start1 <= end2 ||
      start2 >= start1 && start2 <= end1 ||
      end2 >= start1 && end2 <= end1
     )
      return true;
  return false;
}

const main = str => {
  let total = 0;
  const pairs = str.split('\n');

  for (const pair of pairs) {
    if (areContained(pair)) total++;
  }

  return total;
}

console.log(main(input))
