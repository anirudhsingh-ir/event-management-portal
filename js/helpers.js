export const formatEventData = (event) => {
  return {
    id: event.id,
    name: event.name,
    url: event.url,
    image: event.images?.[10]?.url ?? "",
    date: event.dates?.start?.localDate ?? "",
    time: event.dates?.start?.localTime ?? "",
    status: event.dates?.status?.code ?? "",
    venue: event._embedded?.venues?.[0]?.name ?? "",
    city: event._embedded?.venues?.[0]?.city?.name ?? "",
  };
};

export const formatEventsList = (events) => {
  if (!Array.isArray(events)) return [];
  return events.map(formatEventData);
};
