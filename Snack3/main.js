//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari

let numbers = [1 , 2 , 5, 11, 9, 5];

//create a variable for a
let sum = 0;

for(let i = 1; i < numbers.length; i= i+2){
    sum += numbers[i];
}

console.log("la somma totale è: ", sum);