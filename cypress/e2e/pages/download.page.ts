class DownloadPage {
  readonly downloadButton: string

  constructor () {
    this.downloadButton = '#downloadButton'
  }

  public visitPage (): void {
    cy.visit(Cypress.env('DOWNLOAD_URL'))
  }

  public downloadFile (): void {
    cy.get(this.downloadButton).click()
  }

  public validateDownloadFile (): void {
    cy.readFile('cypress/downloads/sampleFile.jpeg')
  }
}

export { DownloadPage }
