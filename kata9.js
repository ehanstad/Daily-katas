const noStrangers = str => {
  const acquaintances = [];
  const friends = [];
  const acquaintance = 3;
  const friend = 5;

  const words = str.replaceAll(".", "").toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let wordCounter = 1;
    for (let j = i + 1; j < words.length; j++) {
      if (currentWord == words[j]) {
        wordCounter++;
      }
    }
    if (wordCounter >= friend && !friends.includes(currentWord)) {
      friends.push(currentWord);
    } else if (wordCounter >= acquaintance && !friends.includes(currentWord) && !acquaintances.includes(currentWord)) {
      acquaintances.push(currentWord);
    }
  }

  return [acquaintances, friends];

}

console.log(noStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly."));