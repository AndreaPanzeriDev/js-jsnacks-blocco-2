

//first name's array
let firstname = ["Andrea", "Marco", "Matteo", "Silvio"];
let nfirstname = firstname.length;




//last name's array
let lastname = ["Panzeri", "Clapis", "Ciresa"];
let nlastname = lastname.length;


console.log(firstname[Math.round(Math.random() * (nfirstname - 1))] + ' ' + lastname[Math.round(Math.random() * (nlastname -1 ))])


