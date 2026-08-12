import {
  getTravisScottEvent,
  getNewDelhiConcerts,
  getSortedEvents,
  getEventNames,
  getEventStatistics,
} from "./api.js";

import {
  displayFoundEvent,
  displayNewDelhiConcerts,
  displaySortedEvents,
  displayEventNames,
  displayEventStatistics,
} from "./ui.js";

// find()
const travisScottEvent = getTravisScottEvent();
displayFoundEvent(travisScottEvent);

// filter()
const newDelhiConcerts = getNewDelhiConcerts();
displayNewDelhiConcerts(newDelhiConcerts);

// sort()
const sortedEvents = getSortedEvents();
displaySortedEvents(sortedEvents);

// map()
const eventNames = getEventNames();
displayEventNames(eventNames);

// reduce()
const eventStatistics = getEventStatistics();
displayEventStatistics(eventStatistics);
