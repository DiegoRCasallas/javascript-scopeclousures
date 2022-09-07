//LOCAL SCOPE
//FUNCTION SCOPE
//las variables podran ser accedida solo desde la función
function greeting(){
    let userName='Ana';
    console.log (userName);
    if (userName=='Ana'){
        console.log(`Hello ${userName}!`)
    }
}
greeting();

//si llamamos la variable userName fuera de la funcion
console.log (userName);
//ReferenceError: userName is not defined

