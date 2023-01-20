import { principalPage, productPage, shoppingCart } from "./pages"

describe('Buy a product', () => {
  it('the phone should be bought', () => {
    principalPage.visitPage()
    principalPage.selectProduct()
    productPage.getPrice()
    productPage.addToCart()
    shoppingCart.goToCart()
    shoppingCart.fillFormOrder()
  })
})
