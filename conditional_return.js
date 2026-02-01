// function declare kore odd and even number jasai kora j true naki false


//even function declare
function isEven(number){
    if(number % 2 === 0){
        return true
    }
    else{
        return false
    }
}

const evenResult = isEven(5);
const evenRes = isEven(150);
console.log(evenResult, evenRes);
console.log('-------------------')

// othoba shorashori console.log kora jabe
console.log(isEven(7));
console.log(isEven(20));
console.log('===============================================');


//odd function declare
function isOdd(numb){
    if(numb%2!=0){
        return true;
    }
    return false;
}

console.log(isOdd(7));
console.log(isOdd(20));