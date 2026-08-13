import { printEventDetails } from "./helpers.js";

export const displayFoundEvent = (event) => {
  console.log("Found Event:");
  console.log(printEventDetails(event));
};

export const displayNewDelhiConcerts = (concerts) => {
  console.log("\nNew Delhi Concerts:");
  concerts.forEach((event) => console.log(printEventDetails(event)));
};

export const displaySortedEvents = (events) => {
  console.log("\nEvents Sorted by Date:");
  events.forEach((event) => console.log(printEventDetails(event)));
};

export const displayEventNames = (names) => {
  console.log("\nEvent Names:");
  console.log(names);
};

export const displayEventStatistics = (stats) => {
  console.log("\nStatistics:");
  console.log(stats);
};
