class PrincipalPage {
  readonly products: string

  constructor () {
    this.products = '#tbodyid'
  }

  public visitPage (): void {
    cy.visit(Cypress.env('BASE_URL'))
  }

  public selectProduct (): void {
    cy.get(this.products).contains('Samsung galaxy s6').click()
  }
}

export { PrincipalPage }
