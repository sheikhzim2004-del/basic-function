
//function declaration
function vatKhaw (){
    console.log('shaban diye hat dhuye asho');
    console.log('tabiler shamone bosho');
    console.log('vat mach plate e naw');
    consoel.log('aibar aram kore khete thako');
}



// borgo ber korte hole
// 5---> 5*5 = 25
// 6---> 6*6 = 35
// 7---> 7*7 = 49
// 10---> 10*10 = 100

//example 01
function square (number){  //()atar vitor thaka variable take paramiter bola hoy
    console.log('value of the number paramiter', number);
    const borgo = number * number;
    console.log('square of the given number', borgo);
}
square(5);  //call the function
console.log('-----------------');
square(10);
console.log('-----------------');
square(45);
//avabe akbar function declare kore onekbar call kore akoi kaj shohoje kora jay.
console.log('============');



//example 02
function add(num1, num2){
    const sum = num1 + num2;
    console.log(sum);
}
add(75, 9);
console.log('-----------------');


// example 03
function addAll(a, b, c, d, e){
    const allNumber = a+b+c+d+e;
    console.log(allNumber);
}
addAll(5,6,9,1,6);  //call kora paramiter er value jodi functon er shathe akoi shonkha na hoy tahole (NUN) dekhabe.



// example 04
function name(firstName, lastName){
    const fullName = firstName + ' ' + lastName;
    console.log(fullName);
}
name('Sheikh', 'Zim');

