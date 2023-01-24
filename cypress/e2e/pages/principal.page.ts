class PrincipalPage {
  readonly products: string

  constructor () {
    this.products = '#tbodyid'
  }

  public visitPage (): void {
    cy.visit(Cypress.env('BASE_URL'))
  }

  public selectProduct (nameProduct: string): void {
    cy.get(this.products).contains(nameProduct).click()
  }
}

export { PrincipalPage }
