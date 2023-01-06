describe('Google test', () => {
  it('test google ui', () => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('automation step by step{enter}')
  })
})