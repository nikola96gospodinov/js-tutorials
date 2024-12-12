// 1. Format today's date in the following formats:

// 1.1. "12/12/2024"

// 1.2. "December 12th, 2024"

// 1.3. "Thursday, December 12th, 2024"

// 1.4. "12:12 PM"

// 1.5. "12:12:00"

// 2. Add 10 days to today's date and format it as "12/12/2024"

// 3. Subtract 5 days from today's date and format it as "12/12/2024"

// 4. Check if today's date is a weekend

// 5. Calculate the difference in days between today and "2024-01-01"

// 6. Calculate the difference in days between today and "2024-01-01" and format it as "in 10 days"

// 7. Create a function that takes two dates, formats them as "December 12th, 2024" and returns a string that says "The difference in days between [date1] and [date2] is [difference] days"

// 8. Create a function that takes a start date and an end date, and returns an object with the following properties:
// - "startDate" formatted as "December 12th"
// - "endDate" formatted as "December 15th, 2024"
// - "difference" formatted as "3 days"

const dates = [
  new Date("2024-03-15"),
  new Date("2024-05-22"),
  new Date("2024-07-04"),
  new Date("2024-09-10"),
  new Date("2024-12-25"),
  new Date("2025-01-01"),
  new Date("2025-02-14"),
  new Date("2025-04-30"),
];

// 9. Create a function that takes three arguments
// - an array of dates and
// - a random date
// - a string that is either "before" or "after"
// and returns the dates that are either before or after the given date depending on the third argument

// 10. Create a function that takes two arguments
// - an array of dates
// - a random date
// if the random date is in the array of dates, then return the date in the format "December 12th, 2024" otherwise return "The date is not in the array"

const eventDates = {
  startDate: new Date("2025-03-15"),
  endDate: new Date("2025-05-22"),
  eventName: "N/A",
};

// 11. Create a function that takes an object with the following properties
// - "startDate"
// - "endDate"
// - "eventName"
// and returns an object with the following properties
// - "startDate" formatted as "December 12th, 2024"
// - "endDate" formatted as "December 15th, 2024"
// - "duration" formatted as "3 days"
// - "eventName" as "React Conference"
