function greeting(){
    let username='Diego';

    function displayUserName(){

        return "hello "+username;
    }
    return displayUserName;
}

const saludo = greeting();
console.log(saludo);
console.log(saludo());

/*

[Function: displayUserName]
helloDiego

*/