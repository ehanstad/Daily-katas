function reorder(string) {
    let numbers = "";
    let uppercase = "";
    let lowercase = "";

    let i = 0;
    let char = "";

    while (i < string.length) {
        char = string[i];

        if (!isNaN(char)) {
            numbers = numbers + char;
        } else {
            if (char == char.toUpperCase()) {
                uppercase = uppercase + char;
            } else {
                lowercase = lowercase + char;
            }
        }
        i++;
    }
    return uppercase + lowercase + numbers;
}

console.log(reorder("m11ovM7483975ENT"));