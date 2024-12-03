// There are 2 ways to pass arguments to a function

// 1. Positional arguments (arguments are passed in the order they are defined in the function)
export const greet = (name: string, age: number) => {
  return `Hello ${name}, you are ${age} years old`;
};
greet("John", 30);
// greet(30, "John"); // 👈 This will give us a TypeScript error, because the order of arguments is important

// 2. Named arguments (arguments are passed by their names)
type GreetNewProps = {
  name: string;
  age: number;
};

const greetNew = (props: GreetNewProps) => {
  return `Hello ${props.name}, you are ${props.age} years old`;
};

greetNew({ name: "John", age: 30 }); // 👌 No problem
greetNew({ age: 30, name: "John" }); // 👌 No problem

// Another way positional arguments can give us problems is with optional arguments
const greetOptional = (firstName: string, age?: number) => {
  if (!age) {
    return `Hello ${firstName}`;
  }

  return `Hello ${firstName}, you are ${age} years old`;
};

greetOptional("John"); // 👌 No problem
greetOptional("John", 30); // 👌 No problem

// Let's say we want to add a third argument to the function that isn't optional
// const greetOptional2 = (firstName: string, age?: number, lastName: string) => { // 👈 This will give us a TypeScript error, because a non-optional argument can't follow an optional argument
//   if (!age) {
//     return `Hello ${firstName} ${lastName}`;
//   }

//   return `Hello ${firstName} ${lastName}, you are ${age} years old`;
// };

// Furthermore, if we change the order of the arguments, we'll have to change the order of the arguments in the function call everywhere in our codebase which could be very time consuming and error prone

// Named arguments solve this problem

type GreetOptional2Props = {
  firstName: string;
  age?: number;
  lastName: string;
}; // 👈 Order doesn't matter. A non-optional argument can follow an optional argument

const greetOptional2 = (props: GreetOptional2Props) => {
  if (!props.age) {
    return `Hello ${props.firstName} ${props.lastName}`;
  }

  return `Hello ${props.firstName} ${props.lastName}, you are ${props.age} years old`;
};

greetOptional2({ firstName: "John", lastName: "Doe" }); // 👌 No problem
greetOptional2({ firstName: "John", lastName: "Doe", age: 30 }); // 👌 No problem
greetOptional2({ lastName: "Doe", firstName: "John", age: 30 }); // 👌 No problem

// The named arguments is just an object, so we can destructure it
const greetOptional3 = (props: GreetOptional2Props) => {
  const { firstName, lastName, age } = props;

  if (!age) {
    return `Hello ${firstName} ${lastName}`;
  }

  return `Hello ${firstName} ${lastName}, you are ${age} years old`;
};

greetOptional3({ firstName: "John", lastName: "Doe" }); // 👌 No problem
greetOptional3({ firstName: "John", lastName: "Doe", age: 30 }); // 👌 No problem
greetOptional3({ lastName: "Doe", firstName: "John", age: 30 }); // 👌 No problem

// Or even better, we can destructure it directly in the function parameters
const greetOptional4 = ({ firstName, lastName, age }: GreetOptional2Props) => {
  if (!age) {
    return `Hello ${firstName} ${lastName}`;
  }

  return `Hello ${firstName} ${lastName}, you are ${age} years old`;
};

greetOptional4({ firstName: "John", lastName: "Doe" }); // 👌 No problem
greetOptional4({ firstName: "John", lastName: "Doe", age: 30 }); // 👌 No problem
greetOptional4({ lastName: "Doe", firstName: "John", age: 30 }); // 👌 No problem

// Positional arguments are useful when we have one or two arguments that are obvious and the order of the arguments can be easily remembered or reversed without causing a different result
const add = (a: number, b: number) => {
  return a + b;
};

add(1, 2); // 👌 No problem - same result
add(2, 1); // 👌 No problem - same result

// Sometimes tho even with one or two arguments, named arguments are more readable and preferred
const getNotifications = (isRead: boolean) => {
  // Our logic here
};

getNotifications(true); // 🤔 What does true mean?
getNotifications(false); // 🤔 What does false mean?
// We have to go to the function definition to understand what true and false mean which makes the code less readable

// Named arguments solve this problem
type GetNotificationsProps = {
  isRead: boolean;
};

const getNotifications2 = ({ isRead }: GetNotificationsProps) => {
  // Our logic here
};

getNotifications2({ isRead: true }); // 👌 We know exactly what true means and that we are getting notifications that are read
getNotifications2({ isRead: false }); // 👌 We know exactly what false means and that we are getting notifications that are unread
