import { MonitorListPage, PrincipalPage } from "./pages";


describe("the user navigates to the dresses page should", () => {

  let principalPage: PrincipalPage;
  let monitorListPage: MonitorListPage;

  before(() => {
    principalPage = new PrincipalPage();
    monitorListPage = new MonitorListPage();
  })

  it("show the available dresses", () => {
    //Arrange
    const monitorNames = ['Apple monitor 24', 'ASUS Full HD']

    //Act
    principalPage.visitPage()
    monitorListPage.selectMonitorCategory()

    //Assert
    monitorListPage.validateItemsNumber(2)
    monitorListPage.validateItemsName(monitorNames)
  })
})