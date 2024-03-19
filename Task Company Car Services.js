// Task Company Car Services

function checkOil(numberCars) {
    return numberCars * 50;
}

function checkTires(numberTires) {
    return numberTires * 100;
}

function checkBody(numberCars) {
    return numberCars * 20;
}

function total(priceChekOil, priceChekTires, priceChekBody) {
    console.log("Total Price Check : " + (priceChekOil + priceChekTires + priceChekBody ) + " $ ");
}

priceChekOil = checkOil(Number(prompt("Enter Number Cars ((Check Oil)):")));
priceChekTires = checkTires(Number(prompt("Enter Number Tires:")));
priceChekBody = checkBody(Number(prompt("Enter Number Cars (Check Body):")));

total(priceChekOil, priceChekTires, priceChekBody);
