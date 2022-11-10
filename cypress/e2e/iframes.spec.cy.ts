///<reference types="cypress"/>

context('Handle Iframes', () => {
	beforeEach(() => {
		cy.visit('https://qavbox.github.io/demo/iframes/');
	});

	xit('Enter text into textbox in iframe', () => {
		cy.get('#Frame2')
			.its('0.contentDocument.body')
			.find('#frameinput')
			.type('qavbox');
		cy.get('#Frame1')
			.its('0.contentDocument.body')
			.find('a')
			.each(($el) => {
				cy.wrap($el)
					.invoke('text')
					.then((txt: string) => cy.log(`Link values in frame1: ${txt}`));
			});
	});

	it('Custom Command to access controls inside an iframe', () => {
		cy.getIFrame('#Frame2').find('#frameinput').type('qavbox');
		cy.getIFrame('#Frame2')
			.find('a')
			.each(($el) =>
				cy
					.wrap($el)
					.invoke('text')
					.then((txt) => cy.log(`Link in Frame2:${txt}`))
			);

		cy.getIFrame('#Frame1')
			.find('a')
			.each(($el) =>
				cy
					.wrap($el)
					.invoke('text')
					.then((txt) => cy.log(`Link in Frame2:${txt}`))
			);
	});
});
