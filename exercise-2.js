/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

function grabCategories(obj) {
  return Object.keys(obj);
};

const papaArray = grabCategories(papaJohns);
const toppingsArray = grabCategories(papaJohns.pizzaToppings);

// console.log(papaArray);
// console.log(toppingsArray);

function verifyValues(obj, val) {
  let objArray = Object.values(obj);
  if(objArray.length === val) {
    return true;
  } else {
    return false;
  }
}

const verifyTest = verifyValues(papaJohns, 8);
// console.log(verifyTest);

function getToppingsInfo(obj) {
  return Object.entries(obj.pizzaToppings);
}

const toppingsTest = getToppingsInfo(papaJohns);
// console.log(toppingsTest);

papaJohns.printAd = function(topping) {
  return `Welcome to ${papaJohns.name}! We are located at ${papaJohns.address}. This week, we are having a sale on ${topping} for $${papaJohns.pizzaToppings[topping]}. ${papaJohns.slogan}`;
}

// console.log(papaJohns.printAd('pepperoni'));

papaJohns.slogan = "This is a new slogan, wahoo!";
papaJohns.address = "345 Newaddress Ave";

console.log(papaJohns.printAd('bacon'));