// #FizzBuzz
// Se divisível por 3 ->> 'Fizz'
// Se divisível por 5 ->> 'Buzz'
// Se divisível por 3 && por 5 ->> 'FizzBuzz'
// Se não for um número ->> "NAN"
// Se não for divisível por nada ->> retorna a entrada
let result = fizzbuzz(9);
console.log(result);

function fizzbuzz(input){
    if(typeof input != 'number'){
        return 'NAN'
    }
    if(input % 3 == 0){
        return 'Fizz'
    }
    if(input % 5 == 0){
        return 'Buzz'
    }
    else if(input % 3 == 0 && input % 5 == 0){
        return 'FizzBuzz'
    }

    return input
}