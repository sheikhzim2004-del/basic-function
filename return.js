
//function declare no 01
function tenTimes (number){
    const result = number * 10;
    return result;
}

//function declare no 02
function cutHalf (number){
    const half = number /2;
    return half;
}

//Dossent work 
tenTimes(5); // kono function e return use korle shorashori call kora jabe na. jekono akta variable declar kore call korle tobei shei output ta shei variable er value hishabe output dibe. 


console.log('====================1nd result under bellow===============================');
//call the function no 01 using a new variaable
const output = tenTimes(5);  //return use koray new variable declar kora hoyeche
console.log('output:', output);  // variable er value ta deckhte console log kora hoyeche
console.log('------------------------------------');
const bigNum = tenTimes(99);
console.log(bigNum);




console.log('====================2nd result under bellow===============================');
//call the function no 02 using a new variaable
const halfResult = cutHalf(80);
console.log(halfResult);
console.log('-----------------------');
const halfRes = cutHalf(23);
console.log(halfRes);

