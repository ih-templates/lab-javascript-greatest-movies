/* eslint no-restricted-globals: 'off' */

/**
 * Getting started
 * - Fork
 * - Clone
 * - Commit
 */

/**
 * Things to remember
 * - Students do not have to touch the data file with the movies
 * - Data should not be copied to the movies.js file
 * - Install live server extension to VS Code
 * - Open SpecRunner.html with live server to see changes live if the site opens 
 * to “IP-Address:5500/starter_code” then finish the path name by adding ”/SpecRunner.html”
 */

// use sort, filter, map, reduce

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

/** 
 * Tests satisifed: 
 * Defines orderByyear
 * Should return an array
 * Should return a new array
 * Should return the element in a single element array
 * */ 
// function orderByYear(arr){
//   // 5 ways to copy an array

//   // why you can't use = to copy an array
//   // let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
//   // let fakeSheeps = sheeps;
//   // let cloneSheeps = [...sheeps];
//   // console.log(sheeps === fakeSheeps);
//   // // true --> it's pointing to the same memory space
//   // console.log(sheeps === cloneSheeps);
//   // // false --> it's pointing to a new memory space

//   // for loop
//   // let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
//   // let cloneSheeps = [];
//   // for(let i = 0; i < sheeps.length; i++){
//   //   // clonesSheeps[i] = sheeps[i]; INCORRECT, array is not initialized thus you cannot change the values of the indexes
//   //   cloneSheeps.push(sheeps[i]);
//   // }
//   // console.log(sheeps);
//   // console.log(cloneSheeps);
  
//   // while loop
//   // let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
//   // let cloneSheeps = [];
//   // let i = 0;
//   // while(i < sheeps.length){
//   //   cloneSheeps.push(sheeps[i]);
//   //   i++
//   // }
//   // console.log(sheeps);
//   // console.log(cloneSheeps);

//   // slice - takes two optional parameters (start, end)
//   // @start - specifies where to start the selection, if omitted it acts like "0",
//   // if a negative value is used then then it will start copying from the front
//   // so if "-1" is used it will copy the last element, if -2 is used it will copy
//   // the last two elements and so on. So if it is a positive it will start counting
//   // where to start copying from left to right and it will count from right to left
//   // if the number is negative
//   // @end - specifies where to end the selection, if omitted all elements from the start
//   // param to the end of the array will be copied, negative values affect it
//   // the same way they affect start
//   // let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
//   // let cloneSheeps = sheeps.slice();
//   // console.log(sheeps);
//   // console.log(cloneSheeps);

//   // Array.from(originalArr) - has other optional params
//   // let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
//   // let cloneSheeps = Array.from(sheeps);
//   // console.log(sheeps);
//   // console.log(cloneSheeps);

//   // concat - normally used to merge two or more arrays into 1, has other optional params
//   // let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
//   // let cloneSheeps = sheeps.concat()
//   // console.log(sheeps);
//   // console.log(cloneSheeps);

//   let newArr =[]
//   newArr = [...arr];

//   return newArr;
// }

/** 
 * Tests satisifed: 
 * Defines orderByyear
 * Should return an array
 * Should return a new array
 * Should return the element in a single element array
 * Return the new array in ascending order
 * If two movies have the same year, order them alphabetically by their title
 * */ 
function orderByYear(arr){
  // sort method
  // - resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
  // - @compareFunction (optional) - Specifies a function that defines the sort order. If omitted, the array 
  // elements are converted to strings, then sorted according to each character's Unicode code point value. 

  // Without a compare function
  // let stringArray = ['Blue', 'Humpback', 'Beluga'];
  // let numericStringArray = ['80', '9', '700'];
  // let numberArray = [40, 1, 5, 200];
  // let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];
  // console.log(stringArray.sort())
  // console.log(numericStringArray.sort())
  // console.log(numberArray.sort())
  // console.log(mixedNumericArray.sort())

  // With compare function
  // let numbers = [4, 2, 5, 1, 3];
  // let newNumbers = numbers.sort(function(a, b) {
  //   console.log(`${a} - ${b} = ${a - b}`);
  //   return a - b;
  // });

  // using array function
  // let numbers = [4, 2, 5, 1, 3];
  // let newNumbers = numbers.sort((a, b) => {
  //   console.log(`${a} - ${b} = ${a - b}`);
  //   return a - b;
  // }); 

  // short version
  // let numbers = [4, 2, 5, 1, 3];
  // let newNumbers = numbers.sort((a, b) => a - b);
  // console.log(newNumbers)

  // localeCompare
  // resources - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare 
  // for strings only, numbers will return an error
  // let stringArray = ['Blue', 'Humpback', 'Beluga'];
  // let newArr = stringArray.sort((a, b) => a.localeCompare(b));
  // console.log(newArr)

  // show how to sort using insertion and selection sort
  // selection sort find the smallest number then find the second smallest, and so on
  // insertion put each number in its place one at a time

  let newArr = [...arr];
  newArr.sort((a,b) => { 
    if(a.year > b.year){
        return 1;
    }
    else if(a.year < b.year){
      return -1;
    }
    else { // if they are equal
      // return 0; // you don't need to specify this, sort will know

      // long version
      if(a.title > b.title) {
        return 1;
      }
      else if(a.title < b.title) {
        return -1;
      }
      else{
        return 0;
      }

      // short version of
      // return a.title.localeCompare(b.title);
    }
  });

  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

/**
 * Tests satisfied:
 * Defines howManyMovies
 */
// function howManyMovies(arr) {
// }

/**
 * Tests satisfied:
 * Defines howManyMovies
 * Should return a number
 * Should return 0 if the array is empty
 */
// function howManyMovies(arr) {
//   let arrSize = arr.length
//   return arrSize;
// }

/**
 * Tests satisfied:
 * Defines howManyMovies
 * Should return a number
 * Should return 0 if the array is empty
 * Return 0 if he did not direct none of the movies in the array
 * Only drama movies! Should return 1
 * Only Steven Spielberg movies! Should return 2
 * Should return 4
 */
function howManyMovies(arr) {
  // filter - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // show how its equivalent using a regular for loop

  // get an array with drama movies only
  let drama = arr.filter(movie => {
    return movie.genre.indexOf("Drama") >= 0;
  });

  let spielberg = drama.filter(movie => {
    return movie.director === "Steven Spielberg";
  });

  return spielberg.length;

  // short version
  // return arr.filter(movie => {
  //     return movie.genre.includes('Drama') && movie.director === "Steven Spielberg";
  // }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

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

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  // if(arrOfMovies.length === 0) return averageRate;
  // let averageRate = 0;
  // let newArr = arrOfMovies.filter(obj => Object.keys(obj).includes('rate'))
  // newArr.forEach(movie => averageRate += movie.rate);
  // return Math.round(100*averageRate/arrOfMovies.length)/100;

  let sumOfRating = arr.reduce((sum, curr) => {
    let ratingAsFloat = Number(curr.rate);
    return sum + ratingAsFloat;
  }, 0);

  let averageRating = sumOfRating/arr.length;
  let avgRounded = Number(averageRating.toFixed(2));

  return avgRounded || 0;

  // short version
  // return Number((arr.reduce((sum, curr) => sum + Number(curr.rate), 0)/arr.length).toFixed(2)) || 0;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  // if Drama is found in the genre array then return elements into array
  let dramaOnly = arr.filter(curr => {
    return curr.genre.indexOf("Drama") >= 0;
  });

  let dramaAvgRating = ratesAverage(dramaOnly);

  return dramaAvgRating;

  // short version
  // return ratesAverageFancy(arr.filter(curr => curr.genre.indexOf("Drama") >= 0)) || 0;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let duration2 = arr.map((curr) => {
    return curr.duration;
  }).map((curr) => {
    if(curr.length === 0)
    return '0';
    else if(curr.includes("h") && curr.includes("min")) {
      return parseInt(curr.split("h").join("").split("min").join("").split(" ")[0])*60 + parseInt(curr.split("h").join("").split("min").join("").split(" ")[1]);
    }
    else if(curr.includes("h")) {
      return parseInt(curr.split("h").join(""))*60;
    }
    else if(curr.includes("min")) {
      return parseInt(curr.split("h").join(""));
    }
    else
    return curr;
  })

  let count = 0;
  let addMinutes = arr.map((curr) => {
     curr.duration = duration2[count];
     count++
    return curr;
  })

  return addMinutes;

  // change each duration to string before splitting
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
  if(arr.length == 0) return null;
  let sortedByYear = orderByYear(arr);

  let currYear = sortedByYear[0].year;
}