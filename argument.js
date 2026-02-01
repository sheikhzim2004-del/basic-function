
//function declaration example 01
function doubelIt(number) {   //() er vitore thaka take bola hoy variable
    const double = number * 2;
    console.log('giver number:', number, 'double number:', double);
}

doubelIt(15);  //() er vitore thaka take bola hoy argument/variable er value
console.log('---------------------------');
doubelIt(30);
console.log('---------------------------'); //ata just bojhar shubidharte use korechi
doubelIt(100);
console.log('---------------------------');
doubelIt(6546);
console.log('---------------------------');
const number = 55;
doubelIt(number);   // shudhu number declare na kore avabe variable declare korew call kora jay
console.log('---------------------------');
const mySallary = 20500;
doubelIt(mySallary);
console.log('==================================================================');


//function declaration example 02
function deffrence(firstNum, lastNum) {
    const diff = firstNum - lastNum;
    console.log('First Age:', firstNum, 'Last Age:', lastNum, 'Deffernt by:', diff);
}

const myAge = 22;
const fatherAge = 50;
deffrence(fatherAge, myAge);