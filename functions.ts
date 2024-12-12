// Exercise 1

// 1.1 Create a function called add that takes two parameters of type number and returns the sum of the two parameters and call it with the numbers 10 and 23

// 1.2 Create a function called subtract that takes two parameters of type number and returns the difference between the two parameters and call it with the numbers 150 and 125

// 1.3 Create a function that takes a parameter of type array of numbers and returns the sum of all the numbers in the array

// 1.4 Create a function that takes a parameter of type array of numbers and returns the average of the numbers in the array

// 1.5 Create a function that takes a parameter of type array of numbers and returns the highest number in the array

// 1.6 Create a function that takes two parameters. 1) parameter of type array of numbers and 2) parameter of type number. The function should return a new array with all the numbers in the original array that are greater than the number passed in
export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = 5;

// ---------------------------------------

// Exercise 2

// 2.1 Create a function called getFullName that takes a parameter of type object with firstName and lastName properties and returns the full name by concatenating the firstName and lastName properties with a space in between

// 2.2 Call the function with the people array and store the result in a variable called fullNames
export const people = [
  { firstName: "Justin", lastName: "Bieber" },
  { firstName: "David", lastName: "Beckham" },
  { firstName: "Ariana", lastName: "Grande" },
  { firstName: "Michael", lastName: "Jordan" },
];

// 2.3 Create a function that takes a parameter of type array of strings and returns a new array with all the strings in the original array that start with the letter "a"
export const strings = ["Apple", "banana", "cherry", "date", "apricot"];

// 2.4 Create a function that takes a parameter of type array of objects with name and age properties and returns a new array with all the objects in the original array that have an age greater than 30
export const persons = [
  { name: "John", age: 25 },
  { name: "Jane", age: 35 },
  { name: "Emily", age: 30 },
  { name: "Michael", age: 40 },
  { name: "Jessica", age: 28 },
];

// 2.5 Create a function that takes two parameters. 1) parameter of type array of objects with name and age properties and 2) parameter of type number. The function should return a new array with all the objects in the original array that have an age greater than the number passed in

// ---------------------------------------

// Exercise 3

const items = [
  {
    name: "apple",
    price: 1,
    quantity: 75,
    isOnSale: false,
  },
  {
    name: "banana",
    price: 0.5,
    quantity: 45,
    isOnSale: true,
  },
  {
    name: "orange",
    price: 0.75,
    quantity: 10,
    isOnSale: true,
  },
  {
    name: "pear",
    price: 1.25,
    quantity: 20,
    isOnSale: false,
  },
  {
    name: "watermelon",
    price: 5,
    quantity: 3,
    isOnSale: true,
  },
  {
    name: "pineapple",
    price: 3.5,
    quantity: 15,
    isOnSale: false,
  },
  {
    name: "strawberry",
    price: 2.5,
    quantity: 25,
    isOnSale: false,
  },
];

// 3.1 Create a function that takes an argument of type array of objects with name, price, quantity, and isOnSale properties and returns a new array with all the objects in the original array that are on sale

// 3.2 Create a function that takes two arguments:
//   - first argument of type array of objects with name, price, quantity, and isOnSale properties
//   - second argument is quantity
// The function should return a new array with all the objects in the original array that have a quantity lower than the quantity passed in

// 3.3 Create a function that takes two arguments:
//   - first argument of type array of objects with name, price, quantity, and isOnSale properties
//   - second argument is a string of either "desc" or "asc"
// The function should return a new array with all the objects in the original array sorted by the price property in ascending or descending order depending on the value of the second argument

// 3.4 Create a function that takes two arguments:
//   - first argument of type array of objects with name, price, quantity, and isOnSale properties
//   - second argument is price
// The function should return a new array with all the objects in the original array with a price greater than the price passed. This should only apply for items that aren't on sale

// ---------------------------------------

// Exercise 4
const users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    isActive: true,
    tags: ["admin", "user"],
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    isActive: false,
    tags: ["user"],
  },
  {
    id: 3,
    name: "Bob",
    email: "bob@example.com",
    isActive: true,
    tags: ["user", "moderator"],
  },
  {
    id: 4,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
    tags: ["user"],
  },
];

// 4.1 Create a function that takes the users array and returns an array of all unique tags across all users
// Example: ["admin", "user", "moderator"]

// 4.2 Create a function that takes the users array and a tag string, and returns an array of user names who have that tag
// Example: "admin" -> ["John"]

// 4.3 Create a function that takes the users array and returns an object with two properties:
// - active: array of active users
// - inactive: array of inactive users
// Example: { active: [{...}, {...}], inactive: [{...}] }

// 4.4 Create a function that takes the users array and an a new tag string that doesn't exist in the users array and adds it to all inactive users
