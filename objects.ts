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

// 2.1 Change the latitude property of the address object to 30.3123 without mutating the original object

// 2.2 Add an attractions property to the address object of type string by joining the attractions array with a comma and a space
const attractions = ["Big Ben", "London Eye", "Buckingham Palace"];

// 2.3 Add a new property called "airports" to the address object that is an array of strings with the values "Heathrow", "Gatwick" and "London City"

// 2.4 Remove the second airport from the airports array without mutating the original object

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

// Exercise 3
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

// 3.1 Using produce from immer, add a new friend to the user object

// 3.2 Using produce from immer, remove the second interest from the user object

// 3.3 Using produce from immer, remove the age property from the user object

// 3.4 Using produce from immer, add a new property to the user object called "isActive" and set it to true

// ---------------------------------------

// Exercise 4

type Workout = {
  id: string;
  title: string;
  description?: string;
  duration?: number;
  muscleGroups: string[];
  equipment: string[];
  exercises: {
    id: string;
    title: string;
    description?: string;
    sets: {
      id: string;
      reps: number;
      weight: number;
      isDone: boolean;
    }[];
  }[];
  totalWeight?: number;
};

const workout: Workout = {
  id: "1",
  title: "Morning Workout",
  muscleGroups: ["chest", "triceps"],
  equipment: ["barbell", "dumbbell", "bodyweight"],
  duration: 60,
  exercises: [],
};

// 4.1 Using produce from immer, add benchPressExercise as exercise to the workout object
const benchPressExercise = {
  id: "2",
  title: "Bench Press",
  description: "A basic exercise to strengthen the chest",
  sets: [],
};

// 4.2 Using produce from immer, add the bench press sets to the bench press exercise
const benchPressSets = [
  {
    id: "1",
    reps: 12,
    weight: 40,
    isDone: true,
  },
  {
    id: "2",
    reps: 10,
    weight: 50,
    isDone: true,
  },
  {
    id: "3",
    reps: 8,
    weight: 60,
    isDone: false,
  },
];

// 4.3 Using produce from immer, remove the duration property from the workout object

// 4.4 Using produce from immer, add a description property to the workout object

// 4.5 Using produce from immer, add a new muscle group to the workout object

// 4.6 Using produce from immer, remove "bodyweight" from the equipment array

// 4.7 Using produce from immer, add a new exercise to the workout object

// 4.8 Using produce from immer, add a few sets to the new exercise

// 4.9 Using produce from immer, remove all sets that have isDone set to false

// 4.10 Using produce from immer, generate a new title based on the muscle groups. For example, if the muscle groups are ["chest", "triceps"], the new title should be "Chest, Triceps Workout"

// 4.11 Using produce from immer, add a new property called totalWeight to the workout object. This should be the sum of all the weights in the sets array

// ---------------------------------------

// Exercise 5

const animal = {
  name: "Lion",
  age: 5,
  type: "Mammal",
  habitat: "Savannah",
  diet: ["meat", "fish"],
  isEndangered: false,
  location: {
    latitude: 19.0208,
    longitude: 21.4584,
  },
};

// 5.1 Using destructuring, grab the name and age properties from the animal object

// 5.2 Using destructuring, grab the latitude and longitude properties from the animal object

// 5.3 Using destructuring, grab the first element from the diet array
