


//found only even number using a function
function evenNumbersOnly (numbers){
  let evens = [];
  for(const number of numbers){
    if(number % 2 ===0){
      evens.push(number);
    }
  }
  return evens;
}
const numbers = [56,55,87,22,66,54,59];
const evens = evenNumbersOnly(numbers);
console.log('This is only even number', evens);
console.log('=========================================');


//found sum off even number
function sumEvenOnly(numbers2){
  let sum = 0;
  for( const number of numbers2){
    if(number % 2 === 0){
      sum = sum + number;
    }
  }
  return sum;
}

const numbers2 = [65,97,54,62,97,22,33,54,11];
const sum = sumEvenOnly(numbers2);
console.log('This is sum of numbers2 only even', sum);
