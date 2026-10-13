// Write your solution in this file!


let burgers = ['Humburger", "Cheeseburger']
let featuredDrink = 'Strawberry Milkshake';

function addBurger(){
    var newBurger = 'flatburger';
    burgers.push(newBurger);
}

if (true) {
    let anotherNewBurger = 'Maple Bacon Burger' ;
    burgers.push(anotherNewBurger);
}

function changeFeaturedDrink(){
    featuredDrink = 'The JavaShake';
}


// Test the Code 

addBurger();
changeFeaturedDrink();

console.log(burgers);


console.log(featuredDrink);
