console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}

// Remember to call the function to test

console.log(helloName('Your Name'));
// 3. Function to add two numbers together & return the result


function addNumbers(firstNumber,secondNumber) { //added secondNumber
  return firstNumber + secondNumber; //will return the sum of both numbers within the function
}

console.log('Test - should say 9', addNumbers(4,5)); // should log '9'


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1,num2,num3) {
  return num1 * num2 * num3;            //multiplies the three input numbers
}

console.log('Test - should say 6', multiplyThree(1,2,3)); //terrible test case but it works


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {         //checks if number is positive
    return true;
  }else{
  return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log('Test -should say true', isPositive(5)); // should return true
// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  let last = array.length - 1;  //stored the last index in a local variable for readability
  return array[last];           //returned the value of the last index of the input array
}

let testArray = [1,2,3,4,5,6,7,8,9,10] //array to be used for following


console.log('Test - should say 10', getLast(testArray)); //should return 10

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let number of array){  //for of loop to cycle through each index before terminating
    if (number === value){    //if a value of any index is equal to the search value, return true.
      return true;
    } 
  }
  return false;
}

console.log('Test should say true', find(5,testArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter){            //checks if the value of the first index is equal to the letter being checked.
    return true;
  } else {
    return false;
  }
}
str = 'apple'
console.log('Test - should say true', isFirstLetter('a', str)); //expected true
console.log('Test - should say false', isFirstLetter('b', str)); //expected false


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;            //established a local variable to contain the sum
  // TODO: loop to add items
  for (let num of array){ //for of loop to cycle through all indecies from left to right
    sum += num;           //will continue to add the values of the array to the local sum variable until the loop terminates.
  }
  // TODO: return the sum
  return sum;
}

console.log('Test - should say 55', sumAll(testArray)); // should return 55

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let testArray2 = [-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9]; // test array includes negatives for a more comprehensive test case.
function allPositive(array) {
  let foundPositives =[];             //established a local array to store the output
  for (let num of array){             //for of loop to loop through each index in the array
    if (num > 0){                     //simple check to see if the value is above '0'
      foundPositives.push(num);       //once a positive is found, the value will be pushed to the back of the local array.
    }
  }
  return foundPositives;              //the local array will be returned
}

console.log('Test - should say [1, 2, 3, 4, 5, 6, 7, 8, 9]', allPositive(testArray2)); //should log the local array in allPositives, with only positive numbers 


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

/*source: (https://edabit.com/challenge/NHfYRHg2tDtcZyykB)
description: a board game contains two pieces. each piece may advance
forward 1 - 6 tiles dependent on the number rolled. if both players land on the same tile, 
both players earn a bonus.

task: create a function that takes both player's positions and returns a 
boolean value of wether or not a bonus was earned.


constraints: you cannot move backward.
return false if already on the same tile.
expect only positive input 

the question asked, although worded awkwardly, is essentially: "Can your piece reach your friend's piece on your next dice roll?"
*/

function possibleBonus(myTile, friendTile) {                                    //changed the variable names for readability
	let myHighRoll = myTile + 6;                                                  //represents the max amount of spaces my piece can move
	
	if (myTile === friendTile || myTile > friendTile|| myHighRoll < friendTile ){ //if we begin on the same tile, i can not move backwards to land on their tile.
		return false;                                                               //if my tile is higher than the friend's tile i can not move backwards. .
	} else if (friendTile - myTile <= 6){                                         //&& if my tile + the maximum roll of 6 cannot reach it will also return false 
		return true;                                                                //if the distance between tiles is less than 6, then i will be able to reach, so return true.
	}
}

//automated test cases on the website
console.log('tests for edabit problem:');
console.log(possibleBonus(3,7), 'exp: true');
console.log(possibleBonus(0,6), 'exp: true');
console.log(possibleBonus(1,6), 'exp: true');
console.log(possibleBonus(2,6), 'exp: true');
console.log(possibleBonus(3,6), 'exp: true');
console.log(possibleBonus(4,6), 'exp: true');
console.log(possibleBonus(5,6), 'exp: true');
console.log(possibleBonus(6,6), 'exp: false'); //returns false as you cannot roll a '0'
console.log(possibleBonus(7,6), 'exp: false'); //returns false as you cannot roll a negative number
console.log(possibleBonus(23,27), 'exp: true');
console.log(possibleBonus(1,9), 'exp: false'); //9 - 1 = 8
console.log(possibleBonus(5,3), 'exp: false'); //cannot roll backwards



// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
