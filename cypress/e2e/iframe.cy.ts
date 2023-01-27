import { IFramePage, PrincipalPage, ProductDescriptionPage, ShoppingCartPage } from "./pages"

describe('Use the iframe on the page', () => {

  let iFramePage: IFramePage

  before(() => {
    iFramePage = new IFramePage();
  })

  it('should have a tittle', () => {
    //Arrange
    const textOnFrame = 'This is a sample page'

    iFramePage.visit()

    iFramePage.getFrameTitle(textOnFrame)
  })
})
