import { PersonalFormPage } from "./pages"

describe('Fill a form', () => {

  let personalFormPage: PersonalFormPage

  before(() => {
    personalFormPage = new PersonalFormPage()
  })

  it('the form should be filled', () => {
    //Arrange
    const personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "hibarras@email.com",
      gender: "Male",
      mobileNumber: "3656589156",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
      state: 'Uttar Pradesh',
      city: 'Agra'
    }
    //Act
    personalFormPage.visitFormPage()
    personalFormPage.fillForm(personalInformation)
    //Assert
    personalFormPage.validateModalTable(personalInformation)

  })
})
