// Write a function fib(n) that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci Sequence

// The 1st and 2nd number of the sequence is 1
// To generate the next number of the sequence, we sum the previous two.


// implement memoization (used to solve any dynamic programming problem)
// store duplicate subproblems 
// store n as keys and value being value


// [memoized]
const fib = (n, memo = {}) => {

    if(n in memo) return memo[n];
    if(n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

// [tabulation]
const fibTab = (n) => {
    const table = Array(n + 1).fill(0); 
    table[1] = 1;
    for(let i = 0; i <= n; i++){
        table[i + 1] += table[i];
        table(i + 2) += table[i];
    }

    return table[n];

}

fib(6);
fib(7);  


// Say that you are a traveler on a 2D grid. You begin in the top-left corner
// and your goal is to travel to the bottom-right corner. You may only move down or right.

// In how many ways can you travel to the goal with the dimension m * n?

// [memoized]
const gridTravler = (m, n, memo={}) => { 
 
    //are the args in the memo

    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;

    memo[key] = gridTravler(m-1, n, memo) + gridTravler(m, n -1, memo);  

    return memo[key];
}

// [tabulation]
const gridTravlerTib = (m, n) => {
    const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    table[1][1] = 1;

    for(let i =0; i <= m; i++){
        for(let j = 0; i <= n; i++){
            const current = table[i][j];
            if(j +1 <= n) table[i][j+1] += current;
            if(i +1 <= m) table[i+1][j] += current;
        }
    }

    return table[m][n]; 
}

// memoization
/*
Try to thinking recursive dynamic programming as a recurise tree
Then attempt brute force, then see where sub problems exists and memoize the sub problems.
*/

/*
    Memoization Recipe (dont implement DP on first try)
    a. visualize the problems as a tree 
    b. implement tree using recursion
    c. test it
2. Make it efficent
    a. add a memo object (key -> value mapping) / shared via recursive calls
    b. add a base case to return memo values to already existing recursive base cases
    c. store return values into the memo
*/

// tabulation
/*
    1. visualize the problem as a table.
    2. size the table based on inputs.
    3. initialize the table with default values.
    4. seed the trivial answer into the table.
    5. iterate through the table.
    6. fill further positions based on the current position.

*/

/*
1.Memoization Recipe (dont implement DP on first try)
    a. visualize the problems as a tree.
    b. implement tree using recursion.
    c. test it
2. Make it efficent
    a. add a memo object (key -> value mapping) / shared via recursive calls
    b. add a base case to return memo values to already existing recursive base cases
    c. store return values into the memo
*/



// Write a function canSum(targetSum, numbers) that takes in a targetSum and an array of numbers
// as arguments
// The function should return a boolean indicating whether or not it is possible to generate the
// targetSum using numbers from the array

// You may use an element of the array as many times as needed
// all inputs are non negative

// [memoized]
const canSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers) {
        const remainder = targetSum - num;

        if(canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false; 
    return false;
}

// [tabulation]
const canSumTab = () => {
     
}


// Write a function howSum(targetSum, numbers) that takes in a targetSum and an array
// numbers as arguments, 

// The function should return an array containing any combination of elements that add 
// to up to exactly the targetSum. If there is no combination that adds up to the targetSum,
// then return null

// If there are multiple combinations possible you make return any single on.

const howSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null) {
            memo[targetSum] = [ ...remainderResult, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null; 
    return null;
}

// Write a function bestSum(targetSum, numbers) that takes in a targetSum
// and an array of numbers as arguments

// The function should return an array containing the shrotest combination of numbers
// that add up to exactly the targetSum

// If there is a tie for the shortest combination, you may return any
// one of the shortest

const bestSum = (targetSum, numbers, memo = {}) => {
    if( memo[targetSum] in memo ) return memo[targetSum]; 
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombo = null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombo = bestSum(remainder, numbers, memo);
        if (remainderCombo != null) {
            const combo = [ ...remainderCombo, num];

            // if combo is shorter than current "shortest", update it
            
            if (shortestCombo === null ||  combo.length < shortestCombo.length) {
                shortestCombo = combo;
            }
        }
    }
    memo[targetSum] = shortestCombo;
    return shortestCombo;
}

bestSum(7, [5,3,4,7]);


// Write a function canConstruct(target, wordBank) that accepts a
// target string and an array of strings

// The function should return a boolean indiciating whether or not the 
// 'target' can be constructed by concatenating elements of the `wordBank` array

// You may reuse elements of `wordBank`  as many times as needed

const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if(target == '') return true;

    for(let word of wordBank) {
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank, memo)  === true) {
                memo[target] = true;

                return true;
            }
        }
    }

    return false;
}

// Write a function `countConstruct(target, workBank)` that accepts a target string
// and an array of strings

// The function should return the number of ways that the `target` can be constructed by 
// concatentating elements of the `wordbank` array

// You may reuse elements of `wordBank` as many times as needed.

const countConstruct = (target, wordBanks, memo = {}) => {

    if( target in memo ) return memo[target];
    if( target == '' ) return 1;
    let count = 0;
    for(let word of wordBanks){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            var numsWays = countConstruct(suffix, wordBanks, memo);
            count += numsWays;
        }
    }

    memo[target] = count;
    return count;
 }

 console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));


 // Write a function allConstruct(target, wordBank) that accepts
 // a target string and an array of strings.

 // The function should return a 2D array containing all of the ways 
 // that the `target` can be constructed by concatenating elements
 // of the `wordBank` array. Each element of the 2D array should
 // represent one combination that constructs the `target`.

 // You may reuse elements of the `wordBank` as many times as needed


 const allConstruct = (target, wordBanks, memo = {}) => {
    if(target in memo) return memo[target];
    if ( target === '') return [[]];
    let totalArray = [];

    for(let word of wordBanks) {
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length);
            let canConstruct = allConstruct(target, wordBanks);
            let targetWays = countConstruct.map(word => [word, ...canConstruct]);
            totalArray.push(...targetWays);
        }
    }
    memo[target] = totalArray;
    return totalArray;
 }