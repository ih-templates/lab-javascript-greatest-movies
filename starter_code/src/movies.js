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

function orderByYear(arr){
  let newArr = [...arr];
  newArr.sort((a,b) => { 
    if(a.year > b.year){
        return 1;
    }
    else if(a.year < b.year){
      return -1;
    }
    else { // if they are equal
      if(a.title > b.title) {
        return 1;
      }
      else if(a.title < b.title) {
        return -1;
      }
      else{
        return 0;
      }
    }
  });
  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

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