//variable sin asignar
//var pi =3.1416


/* Una directiva que le dice al navegador que use código JavaScript en "modo estricto".
esto mandara error si no se declaran las variables correctamente */
'use strict';
var pi = 3.1416;
console.log(pi);

function myFunction() {
    'use strict';//activamos modo estricto
    return pi = 3.1416;
}

console.log(myFunction());