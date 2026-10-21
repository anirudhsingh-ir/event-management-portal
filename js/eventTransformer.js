/**
 * Normalizes a raw Ticketmaster event object into a presentation-ready data structure.
 */
export const transformEvent = (event) => {
  const date = event.dates?.start?.localDate;
  const time = event.dates?.start?.localTime;
  const formattedDateTime = date ? (time ? `${date} • ${time}` : date) : "TBA";

  const venue = event._embedded?.venues?.[0]?.name;
  const city = event._embedded?.venues?.[0]?.city?.name;
  const formattedLocation =
    venue && city ? `${venue}, ${city}` : venue || city || "TBA";

  const preferredImage =
    event.images?.find((img) => img.ratio === "16_9" && img.width >= 640) ??
    event.images?.[0];

  const status = event.dates?.status?.code ?? "";

  return {
    id: event.id ?? "",
    name: event.name ?? "Untitled Event",
    url: event.url || "#",
    image: preferredImage?.url ?? "",
    status,
    statusClass: status.toLowerCase(),
    formattedDateTime,
    formattedLocation,
  };
};

/**
 * Normalizes an array of raw Ticketmaster event objects.
 */
export const transformEvents = (events) => {
  if (!Array.isArray(events)) return [];
  return events.map(transformEvent);
};
