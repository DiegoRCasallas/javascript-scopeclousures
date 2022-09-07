var a; // declarando
var b = 'b'; //declaramaos y asignamos 
b = 'bb'; //reasignacion
var a = 'aa'; //redeclaracion

//GLOBAL SCOPE

var fruit = 'Apple';

console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();


//tener cuidado porque el acceso a conutry es global y se puede 
//acceder o modificar desde cualquier parte del programa
function countries(){
    country='Colombia';
    console.log(country);
}

countries();
console.log (country);