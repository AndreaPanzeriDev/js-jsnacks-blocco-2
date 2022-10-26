//Generatore di “nomi cognomi” casuali del grande gatsby.Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.

//first name's array
let firstname = ["Andrea", "Marco", "Matteo", "Silvio"];


//last name's array
let lastname = ["Panzeri", "Clapis", "Ciresa"];


//made all the combination of name and surname
//take a single name 
for(let i = 0; i<firstname.length; i++){
    //combine the single firstname with all the lastname
    for(let x=0; x<lastname.length; x++){
        //print the result
        console.log(firstname[i] + ' ' + lastname[x]);
    }
}


