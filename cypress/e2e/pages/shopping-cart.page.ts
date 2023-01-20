class ShoppingCartPage {
  readonly cartOption: string
  readonly placeOrder: string
  readonly name: string
  readonly country: string
  readonly city: string
  readonly card: string
  readonly month: string
  readonly year: string
  readonly purchase: string
  readonly alert: string
  readonly confirm: string

  constructor () {
    this.cartOption = '#cartur'
    this.placeOrder = '[data-target="#orderModal"]'
    this.name = '#name'
    this.country = '#country'
    this.city = '#city'
    this.card = '#card'
    this.month = '#month'
    this.year = '#year'
    this.purchase = '[onclick="purchaseOrder()"]'
    this.alert = '.sweet-alert > h2'
    this.confirm = '.confirm'
  }

  public goToCart (): void {
    cy.get(this.cartOption).click()
  }

  public fillFormOrder (): void {
    cy.get(this.placeOrder).click()
    cy.get(this.name).type('usuario prueba')
    cy.get(this.country).type('Colombia')
    cy.get(this.city).type('Itagüi')
    cy.get(this.card).type('12345678908')
    cy.get(this.month).type('01')
    cy.get(this.year).type('23')
    cy.get(this.purchase).click()
    cy.get(this.alert).should('have.text', 'Thank you for your purchase!')
    cy.get(this.confirm).click()
  }
}

export { ShoppingCartPage }
