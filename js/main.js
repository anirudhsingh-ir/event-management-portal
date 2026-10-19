import { fetchEvents } from "./api.js";
import { formatEventsList } from "./helpers.js";
import { displayEvents, showLoading, showError } from "./ui.js";

let currentRequestId = 0;

const setControlsLoading = (isLoading) => {
  const searchButton = document.getElementById("searchButton");
  if (searchButton) {
    searchButton.disabled = isLoading;
  }
};

const loadEvents = async (keyword = "", category = "", sort = "") => {
  const requestId = ++currentRequestId;
  showLoading();
  setControlsLoading(true);

  try {
    const params = { city: "Berlin" };
    if (keyword) params.keyword = keyword;
    if (category) params.segmentName = category;
    if (sort) params.sort = sort;

    const data = await fetchEvents(params);

    // Ignore response if a newer request has been triggered
    if (requestId !== currentRequestId) return;

    const rawEvents = data?._embedded?.events || [];
    const cleanEvents = formatEventsList(rawEvents);

    displayEvents(cleanEvents);
  } catch (error) {
    if (requestId !== currentRequestId) return;

    console.error("Failed to load events:", error.message);
    showError("Failed to load events. Please check your connection and try again.", () => {
      loadEvents(keyword, category, sort);
    });
  } finally {
    if (requestId === currentRequestId) {
      setControlsLoading(false);
    }
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
