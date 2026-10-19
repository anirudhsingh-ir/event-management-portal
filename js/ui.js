export const createEventCard = (event) => {
  const statusClass = event.status ? event.status.toLowerCase() : "";
  const imageUrl = event.image;

  return `
    <div class="event-card">
      <div class="event-image-container">
        <img class="event-img" src="${imageUrl}" alt="${event.name}" />
        ${event.status ? `<span class="event-status ${statusClass}">${event.status}</span>` : ""}
      </div>
      <div class="event-content">
        <h3 class="event-title">${event.name}</h3>
        <div class="event-details">
          <div class="event-detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
            <span>${event.date || "TBA"} ${event.time ? `• ${event.time}` : ""}</span>
          </div>
          <div class="event-detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>${event.venue || "TBA"}, ${event.city || "TBA"}</span>
          </div>
        </div>
        <a href="${event.url || "#"}" target="_blank" rel="noopener noreferrer" class="event-action">
          Get Tickets
        </a>
      </div>
    </div>
  `;
};

export const showLoading = (containerId = "events") => {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="spinner-container" role="status" aria-live="polite">
      <div class="spinner" aria-hidden="true"></div>
      <p class="loading-text">Loading events...</p>
    </div>
  `;
};

export const showError = (
  message = "An error occurred while loading events. Please try again.",
  onRetry = null,
  containerId = "events"
) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="error-container" role="alert" aria-live="assertive">
      <div class="error-icon-wrapper">
        <svg class="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
        </svg>
      </div>
      <h3 class="error-title">Unable to Load Events</h3>
      <p class="error-description">${message}</p>
      ${
        onRetry
          ? `
        <button id="retryButton" class="retry-button" type="button" aria-label="Retry loading events">
          <svg class="retry-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
          <span class="retry-text">Try Again</span>
        </button>
      `
          : ""
      }
    </div>
  `;

  if (onRetry) {
    const retryBtn = document.getElementById("retryButton");
    if (retryBtn) {
      retryBtn.addEventListener("click", () => {
        retryBtn.classList.add("retrying");
        const retryText = retryBtn.querySelector(".retry-text");
        if (retryText) retryText.textContent = "Retrying...";
        onRetry();
      });
    }
  }
};

export const displayEvents = (events) => {
  const container = document.getElementById("events");
  if (!container) return;

  if (!events || events.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; color: var(--text-muted); grid-column: 1 / -1;">No events found.</p>';
    return;
  }

  container.innerHTML = events.map(createEventCard).join("");
};
