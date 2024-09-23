export const hello = "World";

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
// const foodMap = {
//   "🌭": "Hot Dog",
//   "🍔": "Burger",
//   "🥩": "Steak",
//   "🥗": "Salad",
//   "🌯": "Burrito",
// };

// 2.7 Check if there are any occurrences of food that is of "type" "undecided"

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

// ---------------------------------------

// Exercise 4

// const shoppingList = [
//   {
//     name: "🥩",
//     quantity: 2,
//     type: "non-vegan",
//     isBought: false,
//   },
//   {
//     name: "🥚",
//     quantity: 12,
//     type: "non-vegan",
//     isBought: false,
//   },
//   {
//     name: "🥑",
//     quantity: 3,
//     type: "vegan",
//     isBought: false,
//   },
//   {
//     name: "🍌",
//     quantity: 7,
//     type: "vegan",
//     isBought: false,
//   },
// ];

// 4.1 Change the "isBought" property of the vegan items to be equal to true while the rest of the items are left unchanged

// 4.2 Grab only the items that are of "non-vegan" type and change the name from an emoji to a text. For example "🥩" -> "Steak" using the "foodMap"
// const foodMap = {
//   "🥩": "Steak",
//   "🥚": "Egg",
//   "🥑": "Avocado",
//   "🍌": "Banana",
// };

// COMPLETE Exercise 5 before proceeding to 4.3 to 4.5

// 4.3 Change the name of each item from an emoji to a text. For example "🥩" -> "Steak" using the "foodMap" and sort the array in alphabetical order by the name of the item

// 4.4 Sort the shopping list by the quantity of the items in ascending order

// 4.5 Sort the shopping list by the quantity of the items in descending order

// ---------------------------------------

// Exercise 5
const numbers = [5, 6, 3, 1, 11, 10, 21];

// 5.1 Sort the numbers array in ascending order

// 5.2 Sort the numbers array in descending order

const names = ["Zoe", "Bob", "Patrick", "David", "Alice"];

// 5.3 Sort the names array in alphabetical order

// 5.4 Sort the names array in reverse alphabetical order

// PROCEED to 4.3 to 4.5

// ---------------------------------------

// Q&A

// 1. For an array with 7 elements, how many times will the callback function be executed in map, filter, find, some, every?

// 2. For an array with 7 elements, what will be the return value of map, filter, find, some, every, toSorted?

// 3. For an array with 7 elements, how many elements will be returned by map, filter, find, toSorted?
