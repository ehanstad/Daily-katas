const howUnlucky = year => {
  const friday = 5;
  let noFriday13ths = 0;
  for (let mounth = 1; mounth <= 12; mounth++)
    if (new Date(`${year}-${mounth}-13`).getDay() === friday)
      noFriday13ths++;

  return noFriday13ths;
}

console.log(howUnlucky(2020));
console.log(howUnlucky(2026));
console.log(howUnlucky(2016));