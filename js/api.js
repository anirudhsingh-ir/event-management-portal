import { API_KEY } from "../config.js";
import { API_BASE_URL, API_ENDPOINTS } from "./constants.js";

export const fetchEvents = async (params = {}) => {
  const url = new URL(`${API_BASE_URL}${API_ENDPOINTS.EVENTS}`);
  url.searchParams.append("apikey", API_KEY);

  Object.entries(params).forEach(([key, value]) => {
    const cleanValue = value?.toString()?.trim();
    if (value !== null && value !== undefined && cleanValue !== "") {
      url.searchParams.append(key, cleanValue);
    }
  });

  const response = await fetch(url);

  if (!response.ok) {
    let errorMessage = `HTTP Error ${response.status}: ${response.statusText}`;
    try {
      const errorData = await response.json();
      errorMessage =
        errorData.fault?.faultstring || errorData.message || errorMessage;
    } catch {
      // JSON parsing failed, rely on HTTP status string
    }
    throw new Error(errorMessage);
  }

  return response.json();
};
