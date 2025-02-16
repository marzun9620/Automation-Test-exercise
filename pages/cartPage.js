class CartPage {
  constructor(page) {
    this.page = page;
    this.viewCartLink = this.page.getByRole("link", { name: "View Cart" });
    this.proceedToCheckoutButton = this.page.getByText("Proceed To Checkout");
  }

  async navigateToCart() {
    await this.viewCartLink.click();
   
  }

  async proceedToCheckout() {
    await this.navigateToCart();
   
    await this.proceedToCheckoutButton.click();
   
  }
}

module.exports = CartPage;
