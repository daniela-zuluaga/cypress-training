class ProductDescriptionPage {
    private price: string
    private addToCartButton: string

    constructor() {
        this.price = '.price-container'
        this.addToCartButton = '.col-sm-12 > .btn'
    }

    public getPrice() {
        cy.get(this.price).then((price) => {
            cy.wrap(price.text()).as('price')
        })
    }

    public addToCart() {
        cy.get(this.addToCartButton).click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
        })
    }
}

export { ProductDescriptionPage }