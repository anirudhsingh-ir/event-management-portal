import { fetchEvents } from "./api.js";
import { formatEventsList } from "./helpers.js";
import { displayEvents } from "./ui.js";

const loadEvents = async (keyword = "", category = "", sort = "") => {
  try {
    const params = { city: "Berlin" };
    if (keyword) params.keyword = keyword;
    if (category) params.segmentName = category;
    if (sort) params.sort = sort;

    const data = await fetchEvents(params);
    const rawEvents = data?._embedded?.events || [];

    const cleanEvents = formatEventsList(rawEvents);

    displayEvents(cleanEvents);
  } catch (error) {
    console.error("Failed to load events:", error.message);
    displayEvents([]); // Show empty state on error
  }
};

const App = () => {
  const searchInput    = document.getElementById("searchInput");
  const searchButton   = document.getElementById("searchButton");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortSelect     = document.getElementById("sortSelect");

  const triggerLoad = () => {
    loadEvents(searchInput.value, categoryFilter.value, sortSelect.value);
  };

  searchButton.addEventListener("click", triggerLoad);

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") triggerLoad();
  });

  // Filters apply immediately on change
  categoryFilter.addEventListener("change", triggerLoad);
  sortSelect.addEventListener("change", triggerLoad);

  // Initial load
  loadEvents();
};

// Initialize App
App();
