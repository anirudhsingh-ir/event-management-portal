export const printEventDetails = (event) => {
  const { id, name, artist, date, venue = "TBD" } = event;

  return `#${id} - ${name} by ${artist} will take place on ${date} at ${venue}.`;
};
