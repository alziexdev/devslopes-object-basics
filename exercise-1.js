/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const sanFranciscos = {
  name: "San Franciscos",
  cuisines: ["Coffee", "Pastries"],
  numberOfStars: 3,
  favorited: true
}



sanFranciscos.address = "Bahnhofplatz 1";
sanFranciscos.zipcode = "93047";
sanFranciscos.acceptsReservations = false;

sanFranciscos.numberOfStars += 1;
sanFranciscos.favorited = !sanFranciscos.favorited;
sanFranciscos.cuisines.push("Smoothies");

console.log(sanFranciscos);

function retrieveProperty(key, obj) {
  if (obj[key] !== undefined) {
    return obj[key];
    } else {
      return "The information you requested does not exist.";
    }
};

const val1 = retrieveProperty('cuisines', sanFranciscos);
const val2 = retrieveProperty('favorited', sanFranciscos);
const val3 = retrieveProperty('name', sanFranciscos);
const val4 = retrieveProperty('nickName', sanFranciscos);
const val5 = retrieveProperty('state', sanFranciscos);

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
