// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

/**
 * Steps
 * 1. Define the function that takes in an array as the parameter
 * 2. Filter with a for loop
 * 3. Filter using the function 
 */

function orderAlphabetically(arr) {

  // ternary operators - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator 
  // its a essentially a shortcut for the if statement 

  // map - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
  // how would you do it without map?

  let titleArr = [...arr];
  let finalArr = [];

  titleArr.sort((a,b) => a.title > b.title ? 1 : -1);

  let twentyArr = titleArr.slice(0, 20);

  twentyArr.forEach(element => {
      finalArr.push(element.title);
  });

  return finalArr;

  // short version
  // return [...arr].sort((a,b) => a.title > b.title ? 1 : -1).map(movie => movie.title).slice(0,20);
}