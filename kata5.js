const numInStr = arr => {
    const numberArr = [];

    arr.map(str => {
        if (containsNum(str))
            numberArr.push(str);
    });

    return numberArr;
}

const containsNum = str => {
    for (let i = 0; i < str.length; i++)
        if (parseInt(str.charAt(i)))
            return true;
    return false;
}

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["aBc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));
console.log(numInStr(["who needs numbers", "not me"]));
console.log(numInStr(["!!", "##", "@"]));
console.log(!isNaN(" "));