class ProductPage {
  constructor(page) {
    this.page = page;
    this.viewProductLink = this.page.getByRole("link", { name: " View Product" });
    this.quantityInput = this.page.locator("#quantity");
    this.addToCartButton = this.page.getByRole("button", { name: " Add to cart" });
  }

  async viewProduct(index = 1) {
    await this.viewProductLink.nth(index).click();
  }

  async addProductToCart(quantity = 1) {
    await this.viewProduct();
    await this.quantityInput.fill(quantity.toString());
    await this.addToCartButton.click();
  }
}

module.exports = ProductPage;
