class PersonalFormPage {

  readonly firstName: string
  readonly lastName: string
  readonly email: string
  readonly gender: string
  readonly mobile: string
  readonly hobbies: string
  readonly currentAdress: string
  readonly state: string
  readonly city: string
  readonly table: string

  constructor() {
    this.firstName = '#firstName'
    this.lastName = '#lastName'
    this.email = '#userEmail'
    this.gender = '#genterWrapper'
    this.mobile = '#userNumber'
    this.hobbies = '#hobbiesWrapper'
    this.currentAdress = '#currentAddress'
    this.state = '#state'
    this.city = '#city'
    this.table = '.table-responsive'
  }
  visitFormPage (): void {
    cy.visit(Cypress.env('FORM_URL'))
  }

  fillForm (personalInformation: any): void {
    cy.get(this.firstName).type(personalInformation.name)
    cy.get(this.lastName).type(personalInformation.lastName)
    cy.get(this.email).type(personalInformation.email)
    cy.get(this.gender).contains(personalInformation.gender).click()
    cy.get(this.mobile).type(personalInformation.mobileNumber)
    this.fillHobbies(personalInformation.hobbies)
    cy.get(this.currentAdress).type(personalInformation.currentAddress)
    cy.get(this.state).type(personalInformation.state)
    cy.get(this.state).type('{enter}')
    cy.get(this.city).type(personalInformation.city)
    cy.get(this.city).type('{enter}')
  }

  fillHobbies (hobbies: string[]): void {
    hobbies.forEach((item) => {
      cy.get(this.hobbies).contains(item).click()
    })
  }

  validateModalTable (personalInformation: any) {
    cy.get(this.table).contains(personalInformation.name)
    cy.get(this.table).contains(personalInformation.lastName)
    cy.get(this.table).contains(personalInformation.email)
    cy.get(this.table).contains(personalInformation.gender)
    cy.get(this.table).contains(personalInformation.mobileNumber)
    cy.get(this.table).contains(personalInformation.currentAddress)
    personalInformation.hobbies.forEach((item: any) => {
      cy.get(this.table).contains(item)
    })
  }
}

export { PersonalFormPage }