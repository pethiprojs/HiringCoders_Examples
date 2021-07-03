// Inverte Strings

let newStr = '';
let result = reverseString("Fala meu champs");

function reverseString(str){
    let i;
    for(i = str.length - 1; i>=0 ; i-- ){
        newStr += str[i];
    }
    return newStr;
}

console.log(result);