import { PrincipalPage } from "./pages/principal.page"
import { ProductDescriptionPage } from "./pages/product-description.page"
import { ShoppingCartPage } from "./pages/shopping-cart.page"

const principalPage = new PrincipalPage()
const productPage = new ProductDescriptionPage()
const shoppingCart = new ShoppingCartPage()

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
