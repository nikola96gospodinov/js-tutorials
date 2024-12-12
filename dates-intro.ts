// Creating a date object for the current date and time
const now = new Date();
console.log(now); // Output: Current date and time

// Creating a specific date (year, month, day)
// Note: Months are 0-based (0 = January, 11 = December)
const christmas = new Date(2024, 11, 25);
console.log(christmas); // Output: December 25, 2024

// Creating a date from a string
const dateFromString = new Date("2024-12-25");
console.log(dateFromString); // Output: December 25, 2024

const dateWithTime = new Date("2024-12-25T10:30:00");
console.log(dateWithTime); // Output: December 25, 2024, 10:30:00

const today = new Date();

// Getting individual components
const year = today.getFullYear();
console.log("year", year);

const month = today.getMonth();
console.log("month", month);

const day = today.getDate();
console.log("day", day);

const hours = today.getHours();
console.log("hours", hours);

const minutes = today.getMinutes();
console.log("minutes", minutes);

const seconds = today.getSeconds();
console.log("seconds", seconds);

const milliseconds = today.getMilliseconds();
console.log("milliseconds", milliseconds);

const dayOfWeek = today.getDay();
console.log("dayOfWeek", dayOfWeek);

// --------------------------------

// date-fns
import {
  format,
  addDays,
  subDays,
  differenceInDays,
  isToday,
  isPast,
  isFuture,
  isWeekend,
  formatDistance,
} from "date-fns";

// Format dates in various ways
format(now, "yyyy-MM-dd"); // "2024-03-15"
format(now, "MM/dd/yyyy"); // "03/15/2024"
format(now, "MMMM do, yyyy"); // "March 15th, 2024"
format(now, "EEEE, MMMM do, yyyy"); // "Friday, March 15th, 2024"
format(now, "h:mm a"); // "3:30 PM"
format(now, "HH:mm:ss"); // "15:30:00"

// Adding and subtracting time
const tomorrow = addDays(now, 1);
const yesterday = subDays(now, 1);

// Simple comparison functions
isToday(now); // true
isPast(yesterday); // true
isFuture(tomorrow); // true
isWeekend(now); // true/false depending on the day

// Calculate differences
const date1 = new Date(2024, 0, 1); // January 1, 2024
const date2 = new Date(2024, 0, 15); // January 15, 2024

differenceInDays(date2, date1); // 14

const date3 = subDays(now, 3);
const date4 = addDays(now, 5);

// Get human-readable time differences
formatDistance(date3, now); // "3 days ago"
formatDistance(date3, now); // "in 5 days"
