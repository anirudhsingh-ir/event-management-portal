import { fetchEvents } from "./api.js";
import { formatEventsList } from "./helpers.js";
import { displayEvents } from "./ui.js";

const App = async () => {
  try {
    const data = await fetchEvents({ city: "New York", sort: "" });
    const rawEvents = data?._embedded?.events || [];

    const cleanEvents = formatEventsList(rawEvents);

    displayEvents(cleanEvents);
  } catch (error) {
    console.error("Failed to load events:", error.message);
  }
};

// Initialize App
App();
