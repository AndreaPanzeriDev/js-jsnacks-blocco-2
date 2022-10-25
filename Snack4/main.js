//Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


let array1 = ["ciao", "come", "stai", "chip" ,"chop", "Elemento"];

let array2 = ["io", "sto", "bene" ,"e" ,"tu"];


if(array1.length > array2.length){
    //calc the difference
    let difference = array1.length - array2.length;
    for(let i=0; i < difference; i++){
        //push element untill they're equal
        let add = prompt("Inserisci un altro elemento:");
        array2.push(add);
    }
    Equal();
}else if(array2.length > array1.length){
    //calc the difference
    let difference = array2.length - array1.length
    for(let i=0; i < difference; i++){
        //push element untill they're equal
        let add = prompt("Inserisci un altro elemento:");
        array1.push(add);
    }
    Equal();
}else{

    Equal();
}


//function to check if thay're equal
function Equal(){
    if(array1.length == array2.length){
        console.log("I due array sono uguali");
    }
}