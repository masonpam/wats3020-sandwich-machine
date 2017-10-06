/* JavaScript for WATS 3020 Sandwich Machine Assignment */


// Gather data from the user
// Users will fill in each prompt with text.

let breadOrder = prompt('What kind of bread would you like? (white, wheat, or flat)');

let meatOrder = prompt('What kind of meat would you like? (If you would like more than one kind please separate with a comma.)');

let toppingOrder = prompt('What toppings would you like? (Please separate selections with a comma, e.g. tomato, pickle, lettuce, etc.)');

let condimentOrder = prompt('What condiments would you like? (Please separate multiple selections with a comma.)');



//render user input for pricing

let prices = {
    sandwich: 5, 
    meat: 1, 
    topping: 0.5, 
    condiment: 0.25 
};

//user input for order information

let meatArray = meatOrder.split(',');
let toppingArray = toppingOrder.split(',');
let condimentArray = condimentOrder.split(',');

//calculate cost from user input

let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

let totalPrice = subtotal + orderTax;

//results of collection of data from user to create a receipt

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadOrder}</p>
    <p>Meat: ${meatOrder}</p>
    <p>Toppings: ${toppingOrder}</p>
    <p>Condiments: ${condimentOrder}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
