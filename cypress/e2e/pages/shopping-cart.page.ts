class ShoppingCartPage {
    private cartOption: string
    private placeOrder: string
    private name: string
    private country: string
    private city: string
    private card: string
    private month: string
    private year: string
    private purchase: string
    private alert: string
    private confirm: string


    constructor() {
        this.cartOption = '#cartur'
        this.placeOrder = '.col-lg-1 > .btn'
        this.name = '#name'
        this.country = '#country'
        this.city = '#city'
        this.card = '#card'
        this.month = '#month'
        this.year = '#year'
        this.purchase = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
        this.alert = '.sweet-alert > h2'
        this.confirm = '.confirm'
    }

    public goToCart() {
        cy.get(this.cartOption).click()
    }

    public fillFormOrder() {
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



