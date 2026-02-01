/**
 * objective: write a function to give me the sum of all number in an array
 * step 01: declare a function
 * step 02: call check whether the function is called properly
 * step 03: set a paramiter (s)
 * step 04: pass the paramiter , check whether paramiter the passed is a proper format
 * step 05: do the function task (step by step)
*/
console.log('===================how to result sum====================');
//function use kore sum ber korar system
function sumNumber (numbers){
  console.log(numbers);
  let sum = 0;
  for (numb of numbers){
    sum = sum + numb;
  }
  return sum;
}
const numbers = [646,64,71,58,15,89];
const sum = sumNumber(numbers);
console.log('the number of sum is:', sum);



console.log('================how to diff betwen 2 num=======================');
//function use kore diffrence ber korar system
function diffNumber(numbers){
  console.log(numbers);
  let diff = numbers[0];
  for(let i = 1; i<numbers.length; i++){
    diff = diff - numbers[i];
  }
  return diff;
}

const number = [958, 548];
const diff = diffNumber(number);
console.log('the number of diffrence:', diff);
