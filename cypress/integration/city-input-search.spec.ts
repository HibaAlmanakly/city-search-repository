describe('Testing City Input', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Test typing Amsterdam', () => {
    cy.route('GET', 'https://api.snappcar.nl/v2/search/query?*').as('cars-list');
    cy.get('.car-input').type('Amsterdam');
    cy.wait('@cars-list');
    cy.get('.cars-in-city').should('be.visible');
  });
});
