class PrincipalPage {
  readonly product: string

  constructor () {
    this.product = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
  }

  public visitPage (): void {
    cy.visit(Cypress.env('BASE_URL'))
  }

  public selectProduct (): void {
    cy.get(this.product).click()
  }
}

export { PrincipalPage }
