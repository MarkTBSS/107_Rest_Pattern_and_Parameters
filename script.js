"use strict";

// Define the restaurant object
const restaurant = {
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    openingHours: {
        mon: {
            open: 12,
            close: 22,
        },
        tue: {
            open: 11,
            close: 23,
        },
        wed: {
            open: 11,
            close: 23,
        },
        thu: {
            open: 11,
            close: 23,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
        sun: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza = function (mainIngredient, ...otherIngredients) {
    console.log(`Here is your pizza with ${mainIngredient} and ${otherIngredients.join(', ')}`);
};

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
