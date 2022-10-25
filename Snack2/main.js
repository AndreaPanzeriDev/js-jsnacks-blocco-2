//Generatore di “nomi cognomi” casuali del grande gatsby.Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.

//first name's array
let firstname = ["Andrea", "Marco", "Matteo", "Silvio"];
let nfirstname = firstname.length;




//last name's array
let lastname = ["Panzeri", "Clapis", "Ciresa"];
let nlastname = lastname.length;


console.log(firstname[Math.round(Math.random() * (nfirstname - 1))] + ' ' + lastname[Math.round(Math.random() * (nlastname -1 ))])


