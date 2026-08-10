const events = [
  {
    id: 1,
    name: "Justice World Tour",
    artist: "Justin Bieber",
    date: "2027-01-18",
    venue: "Jawaharlal Nehru Stadium",
    city: "New Delhi",
    price: 5499,
    soldOut: true,
    organizer: {
      name: "AEG Presents",
      contact: {},
    },
  },
  {
    id: 2,
    name: "Music of the Spheres",
    artist: "Coldplay",
    date: "2026-12-05",
    city: "Ahmedabad",
    price: 6999,
    soldOut: false,
    organizer: {
      name: "BookMyShow Live",
      contact: {
        phone: "7777777777",
      },
    },
  },
  {
    id: 3,
    name: "Divide World Tour",
    artist: "Ed Sheeran",
    date: "2026-11-20",
    venue: "M. Chinnaswamy Stadium",
    city: "Bengaluru",
    price: 3999,
    soldOut: false,
  },
  {
    id: 4,
    name: "After Hours Tour",
    artist: "The Weeknd",
    date: "2026-10-12",
    venue: "DY Patil Stadium",
    city: "Mumbai",
    price: 5999,
    soldOut: true,
    organizer: {
      name: "Live Nation",
      contact: {
        phone: "8888888888",
        email: "contact@livenation.com",
      },
    },
  },
  {
    id: 5,
    name: "Circus Maximus",
    artist: "Travis Scott",
    date: "2026-09-04",
    venue: "JLN Stadium",
    city: "New Delhi",
    price: 4999,
    soldOut: false,
    organizer: {
      name: "Republic Records",
      contact: {
        phone: "9999999999",
        email: "support@republicrecords.com",
      },
    },
  },
];

const printEventDetails = (event) => {
  const { id, name, artist, date, venue = "TBD" } = event;

  return `#${id} - ${name} by ${artist} will take place on ${date} at ${venue}.`;
};

// find()
const travisScottEvent = events.find(
  (event) => event.artist === "Travis Scott",
);

console.log("Found Event:");
console.log(printEventDetails(travisScottEvent));

// filter()
const newDelhiConcerts = events.filter((event) => event.city === "New Delhi");

console.log("\nNew Delhi Concerts:");
newDelhiConcerts.forEach((event) => console.log(printEventDetails(event)));

// sort()
const sortedEvents = [...events].sort((a, b) => a.date.localeCompare(b.date));

console.log("\nEvents Sorted by Date:");
sortedEvents.forEach((event) => console.log(printEventDetails(event)));

// map()
const eventNames = events.map((event) => `${event.artist} - ${event.name}`);

console.log("\nEvent Names:");
console.log(eventNames);

// reduce()
const eventStatistics = events.reduce(
  (stats, event) => {
    stats.totalEvents++;

    if (event.soldOut) {
      stats.soldOutEvents++;
    }

    return stats;
  },
  {
    totalEvents: 0,
    soldOutEvents: 0,
  },
);

console.log("\nStatistics:");
console.log(eventStatistics);
