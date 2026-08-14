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
