class MonitorListPage {
  readonly monitorItem: string
  readonly monitorName: string
  readonly monitorCategory: string

  constructor() {
    this.monitorItem = '.card'
    this.monitorName = '.card-title'
    this.monitorCategory = "[onclick=\"byCat('monitor')\"]"
  }

  selectMonitorCategory (): void {
    cy.get(this.monitorCategory).click()
  }

  validateItemsNumber (itemsNumber: number): void {
    cy.get(this.monitorItem).should('have.length', itemsNumber)
  }

  validateItemsName (names: string[]): void {
    cy.get(this.monitorName).each((item, index) => {
      cy.wrap(item).should('contain.text', names[index])
    })
  }
}

export { MonitorListPage }
