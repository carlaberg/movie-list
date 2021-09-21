Cypress.Commands.add('loadFixtures', () => {
  cy.server()
  cy.route('GET', '/films', 'fixture:movies')
})