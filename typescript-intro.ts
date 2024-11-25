export const num = 10; // number
const str = "hello"; // string
const bool = true; // boolean

// array
const arr = [1, 2, 3]; // number[]
const arr2 = ["a", "b", "c"]; // string[]
const arr3 = [true, false, true]; // boolean[]

// object
const obj = {
  name: "John",
  age: 20,
}; // { name: string, age: number }
const arrOfObj = [
  { name: "John", age: 20 },
  { name: "Jane", age: 30 },
]; // { name: string, age: number }[]

// function
const add = (a: number, b: number) => a + b; // (a: number, b: number) => number
const greet = (name: string) => `Hello, ${name}`; // (name: string) => string
const printGreeting = (name: string) => console.log(greet(name)); // (name: string) => void

// Record
const record = {
  name: "John",
  age: 20,
}; // Record<PropertyKey, unknown>

// ---------------------------------------

// Exercise 1 - define the type of the following object

const exercise = {
  id: "1",
  title: "Bench Press",
  description: "A basic exercise to strengthen the chest",
  sets: [
    {
      id: "1",
      reps: 12,
      weight: 40,
      isWarmUp: true,
    },
    {
      id: "2",
      reps: 10,
      weight: 60,
      isWarmUp: false,
    },
  ],
  muscleGroups: ["chest", "triceps"],
  equipment: ["barbell", "dumbbell", "bodyweight"],
  calculateTotalWeight: function () {
    return (
      this.sets?.reduce(
        (acc: number, set: { weight: number }) => acc + set.weight,
        0
      ) ?? 0
    );
  },
};
