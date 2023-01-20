class PrincipalPage {
    private product: string
    private pageURL: string

    constructor() {
        this.product = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
        this.pageURL = 'https://www.demoblaze.com/'
    }

    public visitPage() {
        cy.visit(this.pageURL)
    }

    public selectProduct() {
        cy.get(this.product).click()
    }
}

export { PrincipalPage }