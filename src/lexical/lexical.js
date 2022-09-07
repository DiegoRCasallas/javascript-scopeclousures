const myGlobal= 0;

//hacemos una funcion que contiene otra
// funcion que ya tiene dentro otra funcion.
function myFuntion(){
    const myNumber=1;
    console.log(myGlobal);

    //funcion interna
    function parent(){
        const innet = 2;
        /*Buscamos acceder a myNumber y myGlobal*/
        console.log(myNumber, myGlobal);

        /*funcion dentro de una funcion que
         esta dentro de una funcion*/

        function child (){

            console.log (innet, myNumber,myGlobal)
        }
        return child();

    }
    
    return parent();
}

myFuntion();
