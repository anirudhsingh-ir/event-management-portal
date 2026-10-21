import { fetchEvents } from "./api.js";
import { transformEvents } from "./eventTransformer.js";
import { renderEvents, renderLoading, renderError } from "./ui.js";
import { ELEMENT_IDS } from "./constants.js";

let currentRequestId = 0;

const setSearchLoading = (searchButton, isLoading) => {
  if (searchButton) {
    searchButton.disabled = isLoading;
  }
};

const loadEvents = async (
  elements,
  { keyword = "", category = "", sort = "" } = {}
) => {
  const requestId = ++currentRequestId;
  const isStale = () => requestId !== currentRequestId;

  renderLoading();
  setSearchLoading(elements.searchButton, true);

  try {
    const params = {
      ...(keyword && { keyword }),
      ...(category && { segmentName: category }),
      ...(sort && { sort }),
    };

    const data = await fetchEvents(params);

    if (isStale()) return;

    const rawEvents = data?._embedded?.events || [];
    const cleanEvents = transformEvents(rawEvents);

    renderEvents(cleanEvents);
  } catch (error) {
    if (isStale()) return;

    console.error("Failed to load events:", error.message);
    renderError(
      "Failed to load events. Please check your connection and try again.",
      () => {
        loadEvents(elements, { keyword, category, sort });
      }
    );
  } finally {
    if (!isStale()) {
      setSearchLoading(elements.searchButton, false);
    }
  }
};

const initApp = () => {
  const elements = {
    searchInput: document.getElementById(ELEMENT_IDS.SEARCH_INPUT),
    searchButton: document.getElementById(ELEMENT_IDS.SEARCH_BUTTON),
    categoryFilter: document.getElementById(ELEMENT_IDS.CATEGORY_FILTER),
    sortSelect: document.getElementById(ELEMENT_IDS.SORT_SELECT),
  };

  const triggerLoad = () => {
    loadEvents(elements, {
      keyword: elements.searchInput?.value.trim() ?? "",
      category: elements.categoryFilter?.value ?? "",
      sort: elements.sortSelect?.value ?? "",
    });
  };

  elements.searchButton?.addEventListener("click", triggerLoad);

  elements.searchInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") triggerLoad();
  });

  // Filters apply immediately on change
  elements.categoryFilter?.addEventListener("change", triggerLoad);
  elements.sortSelect?.addEventListener("change", triggerLoad);

  // Initial load
  loadEvents(elements);
};

// Initialize App
initApp();
