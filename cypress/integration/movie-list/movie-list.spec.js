describe('Movie list tests', () => {
  it('loads movies on page load and shows them in a list', () => {
    cy.loadFixtures()
    cy.visit('/')
    cy.get('.movie-list li')
      .should('have.length', 6)
      
  })
})