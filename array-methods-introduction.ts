// Exercise 1

const food = ["🌭", "🍔", "🍕", "🍔", "🌭", "🌯", "🍔"];

const side = "🍟";

// 1.1 Filter out all the "🍔"

// 1.2 Filter out all the "🍕" and "🌭"

// 1.3 Find the "🌯"

// 1.4 Grab the 3rd item of the food array

// 1.5 Find the index of the "🌯"

// 1.6 Filter depending on the side. If the side is "🍟" then only include "🍔" and "🌭" otherwise include everything else that isn't "🍔" or "🌭"

// ---------------------------------------

// Exercise 2
// const food = [
//   {
//     value: "🌭",
//     type: "unhealthy",
//   },
//   {
//     value: "🍔",
//     type: "unhealthy",
//   },
//   {
//     value: "🥩",
//     type: "undecided",
//   },
//   {
//     value: "🥗",
//     type: "healthy",
//   },
//   {
//     value: "🌯",
//     type: "unhealthy",
//   },
// ];

// const healthySide = "🥦"
// const unhealthySide = "🍟"

// 2.1 Filter all food items that have a "type" of "healthy"

// 2.2 Filter all food items that have a "type" of "unhealthy"

// 2.3 Find the index of a food item with a "value" of "🥗"

// 2.4 Grab the "type" of the food item with a "value" of "🥩"

// 2.5 Map through the food array and add a third property to every food item called "side" and depending on whether the food is "healthy" or "unhealthy" make the value of "side" to be either `healthySide` or `unhealthySide`

// 2.6 Map through the food array and change the value of each food item from an emoji to a text. For example "🍔" -> "Burger", using the "foodmap"
const foodMap = {
  "🌭": "Hot Dog",
  "🍔": "Burger",
  "🥩": "Steak",
  "🥗": "Salad",
  "🌯": "Burrito",
};

// 2.7 Check if there are any occurances of food that is of "type" "undecided"

// ---------------------------------------

// Exercise 3
// const food = [
//   {
//     value: "🍔",
//     ingredients: ["cheese", "bacon", "lettuce", "onion"]
//   },
//   {
//     value: "🍕",
//     ingredients: ["cheese", "peperoni", "onion"]
//   },
//   {
//     value: "🥗",
//     ingredients: ["lettuce", "onion", "tomato"]
//   }
// ]

// 3.1 Check if every food item in the food array has an "ingredients" property

// 3.2 Check if there are food items with an ingredient of "tomato"

// 3.3 Check if all food items have an ingredient of "onion"

// 3.4 Check if all food items have at least 4 ingredients
