describe('Cypress Assertions', () => {
  it('assertion test', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn').should('contain','Button')
    .should('have.class','query-btn btn btn-primary')
    .should('be.visible')
    .should('be.enabled')
    cy.get('#query-btn').invoke('attr','id')
    .should('equal','query-btn')
    cy.get('#query-btn').should('contain','Button')
    .and('have.class','query-btn btn btn-primary')
    //Explicit Assertions
    //expect
    expect(true).to.be.true
    let name = 'Tosan'
    expect(name).to.equal('Tosan')
    //assert
    assert.equal(4,4, 'equal')
  })
})