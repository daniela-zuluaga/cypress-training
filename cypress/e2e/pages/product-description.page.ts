class ProductDescriptionPage {
  readonly price: string
  readonly addToCartButton: string

  constructor () {
    this.price = '.price-container'
    this.addToCartButton = '.btn-success'
  }

  public getPrice (): void {
    cy.get(this.price).then((price) => {
      cy.wrap(price.text()).as('price')
    })
  }

  public addToCart (): void {
    cy.get(this.addToCartButton).click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    })
  }
}

export { ProductDescriptionPage }
