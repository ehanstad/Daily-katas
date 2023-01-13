/* The idea is to see if the number (n) can be represented as
 * a sum of two or more consecutive positive numbers in mathematical terms
 * be represented as follows the series (n = a + (a + 1) + (a + 2) ... (a + b)).
 * This can be simplified as (n = (b + 1) * a + (b * (b + 1)) / 2). 
 * We can therefore write a as an expression (a = (n - b * (b + 1) / 2) / (b + 1)).
 * So we check the values of b form 1 to b * (b + 1) / 2 < n.
 * If some 
 */

const consecutiveSum = n => {

    /* So we loop trough from 1 til (b * (b + 1)) / 2 is smaller then n 
     * We calculate the expression for from the expression above and check if 
     * a is a natural number if that is the case we have a working series.
     */
    for (let b = 1; b * (b + 1) < 2 * n; b++) {
        console.log("b = " + b);
        let a = ((1 * n - (b * (b + 1)) / 2) / (b + 1));
        console.log("a = " + a);
        if (a - parseInt(a, 10) == 0.0)
            return true;
    }

    return false;
}

console.log(consecutiveSum(10));