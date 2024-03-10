// task 1 tip calculator

let total_bill = Number(prompt("Enter Total Bill: "));
let tip = Number(prompt("Choose a percentage tip : "));
let number_person = Number(prompt("How many people: "));

let total_pay = (((tip * total_bill) / 100 ) + total_bill) / 7;

console.log("Totall Pay : " + total_pay);