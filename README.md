# vanilla-dev-squad

To install dependencies run: npm ci

## Rules:

1. Use separate files for API requests
2. Use separate files for section rendering
3. All event listeners on page should be in main.js (? next step - use separate main files for pages)
4. All event handlers should be in js/eventHandlers/ - 1 file for 1 handler. Event handler:
	 a) sets loader (if needed) (/js/rendering/common ?)
	 b) clear prev state (if needed)
	 c) fetches data using /api/:function (async await style)
	 d) uses try ... catch for handling errors
	 e) [success]: renders content using function from /js/rendering/
	 f) [error]: shows error using utils for notifications (/js/rendering/common)
	 g) sets loader to false (if needed) 
4. Use css variables from variables.css
5. Use common classes from styles.css
6. Divide large blocks into small components (sections) => separate file for component (/partials/)

## Main Flow

1. Listeners catch events (main.js)
2. Event handlers call api and handle results (/js/eventHandlers/)
3. API functions fetch data from endpoints (/js/api/)
4. Render functions render data into UI (/js/rendering/)
