class IFramePage {
  readonly iframe: string
  readonly titleFrame: string

  constructor() {
    this.iframe = '#frame1'
    this.titleFrame = '#sampleHeading'
  }

  public visit (): void {
    cy.visit(Cypress.env('IFRAME_URL'))
  }

  public getFrameTitle (title: string): void {
    cy.frameLoaded(this.iframe)
    cy.iframe(this.iframe).find(this.titleFrame).should('have.text', title)
  }

  public goToCssPageInFrame (): void {
    // navigate to the css page in the iframe
  }
}

export { IFramePage }
