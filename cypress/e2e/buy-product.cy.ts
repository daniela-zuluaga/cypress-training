import { PrincipalPage, ProductDescriptionPage, ShoppingCartPage } from "./pages"

describe('Buy a product', () => {

  let principalPage: PrincipalPage
  let productPage: ProductDescriptionPage
  let shoppingCart: ShoppingCartPage

  before(() => {
    principalPage = new PrincipalPage();
    productPage = new ProductDescriptionPage();
    shoppingCart = new ShoppingCartPage()
  })

  it('the phone should be bought', () => {
    //Arrange
    const nameProduct = 'Samsung galaxy s6'

    //Act
    principalPage.visitPage()
    principalPage.selectProduct(nameProduct)
    productPage.getPrice()
    productPage.addToCart()

    //Assert
    shoppingCart.goToCart()
    shoppingCart.fillFormOrder()
  })
})
