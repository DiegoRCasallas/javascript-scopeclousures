/*HOISTIN VARIABLES */
console.log (nameOfDog);
var nameOfDog= 'goofy';

/**ESTO ES LO QUE PASA
   var nameOfDog; -->undefined
   console.log(nameOfDog);
   var nameOfDog ='goofy';
 */




/*HOISTING FUNCIONES*/
nameOfCat();

function nameOfCat(){
    console.log('El mejor gatito es:'+namePet);
}
var namePet= 'Michi';
/*
///OUTPUT
undefined
El mejor catito es:undefined
*/

/*
¿QUE PASO?

var namePet;  -->undefined

function nameOfCat(){
    console.log('El mejor gatito es:'+namePet);
}

nameOfCat();

var namePet='Michi';

 */