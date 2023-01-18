const replaceVowel = str => {
    str = str.toLowerCase();
    let newStr = "";
    Array.from(str).map(char => {
        if (isVowel(char))
            newStr = newStr + getReplacment(char);
        else {
            newStr = newStr + char;
        }
    });
    return newStr;
}

const isVowel = char => {
    return ["a", "e", "i", "o", "u"].indexOf(char) !== -1;
} 

const getReplacment = char => {
    switch (char) {
        case 'a':
            return "1";
            break;
        case 'e':
            return "2";
            break;
        case 'i':
            return "3";
            break;
        case 'o':
            return "4";
            break;
        case 'u':
            return "5";
            break;
    }
}

console.log(replaceVowel("karAchi"));
console.log(replaceVowel("chEmBur"));
console.log(replaceVowel("khandbari"));
console.log(replaceVowel("LexiCAl"));
console.log(replaceVowel("fuNctionS"));
console.log(replaceVowel("EASY"));
