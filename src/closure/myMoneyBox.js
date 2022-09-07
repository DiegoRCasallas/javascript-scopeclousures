function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log('Money Box $' + saveCoins);
}

/**ahorramos 5 monedas */
moneyBox(5);
/**ahorramos 5 monedas, nueva mente */
moneyBox(5);

/**
 No guarda el valor dentro
Money Box $5
Money Box $5
 */



/**
 * La función moneyBoxNew devuelve una función que cuenta monedas y guarda el total.
 * @returns Se devuelve la función countCoins.
 */

function moneyBoxNew() {
    /* Se declara y asigna la variable */
    let saveCoins = 0;

    /*
    Creamos funcion interna que va utilizar la variable saveCoins
    pero como está dentro de otra funcion el valor interno se guardara
     y no será 0 en cada llamada a la función  
     */
    function countCoins(coins) {
        saveCoins += coins;
        console.log("MoneyBox2; $" + saveCoins);
    }
    return countCoins;
}

/*
asignamos la funcion countCoins dentros de una variable
myMoneyBox y llamamos la función countCoins() desde la variavle myMoneyBox

 */
const myMoneyBox = moneyBoxNew();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

console.log(typeof myMoneyBox);