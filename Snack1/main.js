//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  )



//add number
let number = parseInt(prompt("inserisci un numero: "));
console.log("il numero inserito è: ", number);


//check if number is even or not
if(number % 2 == 0){
    console.log(number, " è pari");
}else{
    console.log(number +1);
}