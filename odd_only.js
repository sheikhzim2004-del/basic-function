


//found only even number using a function
function oddNumberOnly(numbers){
  let odds = [];
  for(const number of numbers){
    if(number % 2 === 1){
      odds.push(number);
    }
  }
  return odds;
}

const numbers2 = [56,55,87,22,66,54,59];
const odds = oddNumberOnly(numbers2);
console.log('This is only odd number',odds);