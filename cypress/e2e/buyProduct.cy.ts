describe('Buy a product', () => {
  it('the phone should be bought', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.price-container').then((price) => {
      cy.wrap(price.text()).as('price')
    })
    cy.get('.col-sm-12 > .btn').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    })
    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('usuario prueba')
    cy.get('#country').type('Colombia')
    cy.get('#city').type('Itagüi')
    cy.get('#card').type('12345678908')
    cy.get('#month').type('01')
    cy.get('#year').type('23')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.sweet-alert > h2').should('have.text','Thank you for your purchase!')
    cy.get('.confirm').click()
  })
})
