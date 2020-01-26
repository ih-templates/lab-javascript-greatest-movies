// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

/**
 * Steps
 * 1. Define the function that takes in an array as the parameter
 * 2. Filter with a for loop
 * 3. Filter using the function
 */

 /**
 * Resources
 * filter - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

/**
 * 1. Define the function that takes in an array as the parameter
 */
// function howManyMovies(arr) {
// }

/**
 * 2. Filter with a for loop
 */
// let numArr = [1,2,3,4,5,6,7,8,9,10,11,12];
// let newArr = [];
// for(let i = 0; i < numArr.length; i++){
//   if(numArr[i] > 5){
//     newArr.push(numArr[i]);
//   }
// }
// console.log(newArr);

/**
 * 3. Filter using the function
 */
function howManyMovies(arr) {
  // get an array with drama movies only
  let drama = arr.filter(movie => {
    return movie.genre.indexOf("Drama") >= 0;
  });

  // now filter by directory Spielberg
  let spielberg = drama.filter(movie => {
    return movie.director === "Steven Spielberg";
  });

  return spielberg.length;
}

// Fancy function 
function howManyMovies(arr){
  return arr.filter(movie => movie.genre.includes('Drama') && movie.director === "Steven Spielberg").length;
}