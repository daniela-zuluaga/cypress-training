import { UploadPage } from "./pages";

describe("the user should can upload a file", () => {

  let uploadPage: UploadPage;

  before(() => {
    uploadPage = new UploadPage()
  })

  it("upload a file", () => {
    //Arrange
    const fileName = 'example.json'

    //Act
    uploadPage.visitPage()
    uploadPage.uploadFile(fileName)

    //Assert
    uploadPage.validateFile(fileName)
  })
})