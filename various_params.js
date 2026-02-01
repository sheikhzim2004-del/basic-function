

function evenSizeString(str) {
    const size = str.length;
    console.log('Name:', str, 'Letter of the word:', size);
    if (size % 2 === 0) {
        console.log('Even Size');
        return true;
    }
    else {
        console.log('Odd Size');
        return false;
    }
}

const finalResult = evenSizeString('Dhaka');
console.log(finalResult);
const finalResult2 = evenSizeString('Faka');
console.log(finalResult2);
console.log('===============================================');



function doubleOrTriple (number, doDouble){
    if(doDouble === true){
        const result = number *2;
        return result
    }
    else{
        const result = number *3;
        return result;
    }
}
// akhane log kora function variable er arguments er shorto mile gele sheta she onujayi return value pabe.
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));