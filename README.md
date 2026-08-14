# Event Management Portal

A dynamic web application for discovering and exploring events worldwide, built with HTML, CSS, and Vanilla JavaScript.

## 🛠 Setup & Running

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (optional, for `serve`).

### Using Node.js

1. **Create the API configuration file**

   Create a `config.js` file in the root folder of the project:

   ```js
   export const API_KEY = "YOUR_TICKETMASTER_API_KEY";
   ```

   Replace `YOUR_TICKETMASTER_API_KEY` with your Ticketmaster Discovery API key.

2. **Run the server**:

   ```bash
   cd event-management-portal
   npx serve .
   ```

3. Open your browser and navigate to the URL provided by `serve` (usually `http://localhost:3000`).
