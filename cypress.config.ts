import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		excludeSpecPattern: 'cypress/e2e/**/*.js',
	},
});
