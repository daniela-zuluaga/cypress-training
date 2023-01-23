class PrincipalPage {
  readonly product: string

  constructor () {
    this.product = '#tbodyid'
  }

  public visitPage (): void {
    cy.visit(Cypress.env('BASE_URL'))
  }

  public selectProduct (): void {
    cy.get(this.product).contains('Samsung galaxy s6').click()
  }
}

export { PrincipalPage }
