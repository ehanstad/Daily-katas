const happyAlgorithm = (num, count = 0, usedNums = []) => {
  if (count === 0 && num === 1)
    count = 1;
  if (num === 1)
    return `HAPPY ${count}`;
  if (usedNums.includes(num))
    return `SAD ${count}`;

  usedNums.push(num);
  let newNum = 0;
  Array.from(num.toString()).map(n => {
    newNum = newNum + n * n;
  });

  return happyAlgorithm(parseInt(newNum), ++count, usedNums);
}

console.log(happyAlgorithm(139));
console.log(happyAlgorithm(67));
console.log(happyAlgorithm(1));
console.log(happyAlgorithm(89));