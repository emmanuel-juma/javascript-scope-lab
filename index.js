// Write your solution in this file!
const burgers = ['Hamburger', 'Cheeseburger'];

let featuredDrink = 'The JavaShake';

function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

if(true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

function changeFeaturedDrink() {
    featuredDrink = 'Strawberry Milkshake';
}

// Test the Code 

addBurger();
changeFeaturedDrink();

console.log(burgers);


console.log(featuredDrink);
