// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

function printPizzaPlace() {
  for (const key in dominos) {
    console.log(key, dominos[key]);
  }
};

// console.log(printPizzaPlace());

function toppingsPriceRange(pizzaPlace) {
  const { pizzaToppings } = pizzaPlace 
  const priceRange = [];
  let rangeMax = 0;
  let rangeMin = 100;

  for(const key in pizzaToppings) {
    if(rangeMax <= pizzaToppings[key]) {
      rangeMax = pizzaToppings[key];
    } else if(rangeMin >= pizzaToppings[key]) {
      rangeMin = pizzaToppings[key];
    };
  };
  priceRange.push(rangeMin, rangeMax);
  return priceRange;
};

// console.log(toppingsPriceRange(dominos));

function calculateAverageRating(pizzaPlace) {
  const { starReviews } = pizzaPlace 
  let totalStars = 0;
  const count = Object.keys(starReviews).length;
  for(let key in starReviews) {
    totalStars += starReviews[key];
  }
  return (totalStars / count).toFixed(2);
}

console.log(calculateAverageRating(dominos));