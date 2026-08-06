// Used const
const event1 = {
  name: "Circus Maximus",
  artist: "Travis Scott",
  date: "4th September, 2026",
  venue: "JLN Stadium",
  city: "Delhi",
  organizer: {
    name: "Republic records",
    contact: {
      phone: "9999999999",
    },
  },
};

const event2 = {
  name: "Circus Maximus",
  artist: "Travis Scott",
  date: "4th October, 2026",
  city: "Mumbai",
};

// Used spread operator.
const newEvent2 = {
  venue: "DY Patil Stadium",
  ...event2,
};

// Used arrow function.
const printEventDetails = (event) => {
  // Used destructuring and rest operator.
  const { artist, date, venue, ...otherDetails } = event;

  // Used let
  let finalVenue = venue;
  if (!finalVenue) {
    finalVenue = "TBD";
  }

  // Used template literals.
  return `The ${artist} concert will take place on ${date} in ${finalVenue}. The event has been named ${otherDetails.name}.`;
};

console.log(printEventDetails(event1));
console.log(printEventDetails(event2));
console.log(printEventDetails(newEvent2));

// Used optional chaining and nullish coalessing.
console.log(`Organizer: ${event1.organizer?.name ?? "TBD"}`);
console.log(`Organizer: ${event2.organizer?.name ?? "TBD"}`);
