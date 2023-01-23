const countBoomerangs = arr => {
    validateArray(arr);

    let counter = 0;
    for (let i = 0; i < arr.length - 2; i++)
        if (arr[i] === arr[i + 2] && arr[i + 1] !== arr[i])
            counter++;
    return counter;
}

const validateArray = arr => {
    if (arr.length < 3)
        throw new Error("The array is too short");
    arr.map(i => {
        if (isNaN(i))
            throw new Error("The array contains other items than numbers");
    });
}

try {
    console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
    console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
    console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));
    console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));
    console.log(countBoomerangs([]));
    console.log(countBoomerangs([1, 7]));
    console.log(countBoomerangs([1, 7, 1, 7, "one", 7, 1]));
} catch (e) {
    console.log(e);
}