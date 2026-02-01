/**
 * objective: write a function to give me the sum of all number in an array
 * step 01: declare a function
 * step 02: call check whether the function is called properly
 * step 03: set a paramiter (s)
 * step 04: pass the paramiter , check whether paramiter the passed is a proper format
 * step 05: do the function task (step by step)
*/
function sumOfNumber(numbers){
  let sum = 0;
  for(const number of numbers){
    console.log(number);
    sum = sum + number;
  }
  return sum;
}

const numbs = [5,6,8,9,2,7];
const sum = sumOfNumber(numbs);
console.log('Sum of number is:', sum);