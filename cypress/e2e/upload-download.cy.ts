import { DownloadPage, UploadPage } from "./pages";

describe("the user should can upload a file", () => {

  let uploadPage: UploadPage
  let downloadPage: DownloadPage

  before(() => {
    uploadPage = new UploadPage()
    downloadPage = new DownloadPage()
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

  it("download a file", () => {
    //Arrange
    const textToField = 'This is a test on cypress workshop'

    //Act
    downloadPage.visitPage()
    downloadPage.downloadFile()

    //Assert
    downloadPage.validateDownloadFile()
  })
})