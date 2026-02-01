
// function declare 01
function add(price1, price2){
    const total = price1 + price2;
    return total;
}
const bill = add(10, 80);

// function declare 02
function add2(price1, price2){
    return price1 + price2;     // alada variable add na kore shorashori ak laine add kore return kora jay avabe.
}
const bill2 = add2(5, 40);

//01 and 02 akshathe console.log kora hoyeche
console.log(bill, bill2);


//function declare 03
function doMath(number1, number2){
    const sum = number1 + number2;
    const diff= number1 - number2;
    const mult= sum * diff;
    const half= mult / 2;
    return half;
}
const result = doMath(20, 10);
console.log('finally half er result:', result);