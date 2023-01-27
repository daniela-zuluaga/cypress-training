class UploadPage {
  readonly browseButton: string
  readonly fileTittle: string
  readonly uploadButton: string

  constructor () {
    this.browseButton = '#file-upload'
    this.uploadButton = '#file-submit'
    this.fileTittle = '#uploaded-files'
  }

  public visitPage (): void {
    cy.visit(Cypress.env('UPLOAD_URL'))
  }

  public uploadFile (fileName: string): void {
    cy.get(this.browseButton).attachFile(fileName)
    cy.get(this.uploadButton).click()
  }

  public validateFile (fileName: string): void {
    cy.get(this.fileTittle).should('contain', fileName)
  }
}

export { UploadPage }
