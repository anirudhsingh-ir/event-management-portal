import { events } from "./constants.js";

export const getTravisScottEvent = () =>
  events.find((event) => event.artist === "Travis Scott");

export const getNewDelhiConcerts = () =>
  events.filter((event) => event.city === "New Delhi");

export const getSortedEvents = () =>
  [...events].sort((a, b) => a.date.localeCompare(b.date));

export const getEventNames = () =>
  events.map((event) => `${event.artist} - ${event.name}`);

export const getEventStatistics = () =>
  events.reduce(
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
