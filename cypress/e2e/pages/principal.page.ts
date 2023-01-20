class PrincipalPage {
    private product: string

    constructor() {
        this.product = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
    }

    public visitPage() {
        cy.visit(Cypress.env('BASE_URL'))
    }

    public selectProduct() {
        cy.get(this.product).click()
    }
}

export { PrincipalPage }