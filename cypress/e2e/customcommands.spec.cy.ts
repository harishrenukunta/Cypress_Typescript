///<reference types="cypress"/>

describe('Custom commands - Illustration', () => {
	it('Overwrite commands', () => {
		cy.visit('https://qavbox.github.io/demo/signup/');
		cy.get('#username').type('Harish');
	});
});
