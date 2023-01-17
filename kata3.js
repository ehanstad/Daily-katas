/* First thing is that I devide the sentence into an array of words.
 * I create a boolean and initially sets it to true. Then I loop
 * through the words and devied each word into letters, then I loop
 * through each word and checks if we found our first letter and the 
 * next letter in the array is not our best friend letter then the boolean
 * is set to false. However this misses a case, therefor we still have 
 * to check if the last letter in a word is equal to our first word, then
 * we automaticlly know the upcoming letter is a space and therefor not the
 * best friend letter.
 */

const bestFriend = (str, l1, l2) => {
    const words = str.split(" ");

    let isBestFriend = true;

    words.map(word => {
        const letters = Array.from(word);
        if (letters[letters.length - 1] == l1)
            isBestFriend = false;
        
        for (let i = 0; i < letters.length - 1; i++)
            if (letters[i] == l1 && letters[i+1] != l2)
                isBestFriend = false;
    });

    return isBestFriend;
}

console.log(bestFriend("he headed to the store", "h", "e"));
console.log(bestFriend("i found an ounce with my hound", "o", "u"));
console.log(bestFriend("we found your dynamite", "d", "y"));