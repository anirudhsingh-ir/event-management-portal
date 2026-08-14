export const displayEvents = (events) => {
  if (!events.length) {
    console.log("No events found.");
    return;
  }

  console.log(`\n=== UPCOMING EVENTS (${events.length}) ===\n`);

  events.forEach((event, index) => {
    console.log(`${index + 1}. ${event.name}`);
    console.log(`   📅 Date:   ${event.date} at ${event.time}`);
    console.log(`   📍 Venue:  ${event.venue} (${event.city})`);
    console.log(`   🏷️  Status: ${event.status}`);
    console.log(`   🔗 Link:   ${event.url}`);
    console.log(`--------------------------------------------------`);
  });
};
