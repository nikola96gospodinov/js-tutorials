import { produce } from "immer";

// Exercise 1
export const userInfo = {
  firstName: "Justin",
  lastName: "Bieber",
  age: 30,
  favouriteFood: "🍕",
};

// 1.1 Add a new property to the userInfo object called "isAdmin" and set it to true

// 1.2 Access the firstName property and store it in a variable called firstName

// 1.3 Add a new property to the userInfo object called "fullName" that concatenates the firstName and lastName properties

// 1.4 Remove the firstName and lastName properties from the userInfo object

// 1.5 Replace the favouriteFood property with "🍔"

// ---------------------------------------

// Exercise 2

// 2.1 Perform the same operations as in Exercise 1 on the userInfo object, without mutating the original object

// ---------------------------------------

// Exercise 3
const address = {
  street: "123 Main St",
  city: "London",
  country: "UK",
  postcode: "WC1B 4HD",
  coordinates: {
    latitude: 51.5074,
    longitude: -0.1278,
  },
};

// 3.1 Change the latitude property of the address object to 30.3123 without mutating the original object

// 3.2 Add an attractions property to the address object of type string by joining the attractions array with a comma and a space
const attractions = ["Big Ben", "London Eye", "Buckingham Palace"];

// 3.3 Add a new property called "airports" to the address object that is an array of strings with the values "Heathrow", "Gatwick" and "London City"

// 3.4 Remove the second airport from the airports array without mutating the original object

// ---------------------------------------

type User = {
  name: string;
  age?: number;
  address: {
    street: string;
    city: string;
  };
  interests: string[];
  friends: {
    name: string;
  }[];
  isActive?: boolean;
};

// Exercise 4
const user: User = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "London",
  },
  interests: ["coding", "reading", "traveling"],
  friends: [
    {
      name: "Jane",
    },
    {
      name: "Bob",
    },
  ],
};

// 4.1 Using produce from immer, add a new friend to the user object

// 4.2 Using produce from immer, remove the second interest from the user object

// 4.3 Using produce from immer, remove the age property from the user object

// 4.4 Using produce from immer, add a new property to the user object called "isActive" and set it to true
