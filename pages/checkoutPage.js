class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.placeOrderLink = this.page.getByRole("link", { name: "Place Order" });
    this.nameOnCardInput = this.page.locator('input[name="name_on_card"]');
    this.cardNumberInput = this.page.locator('input[name="card_number"]');
    this.cvcInput = this.page.getByPlaceholder("ex.");
    this.expiryMonthInput = this.page.getByPlaceholder("MM");
    this.expiryYearInput = this.page.getByPlaceholder("YYYY");
    this.payButton = this.page.getByRole("button", { name: "Pay and Confirm Order" });
  }

  async fillPaymentDetails() {
    await this.nameOnCardInput.fill("Marzun");
    await this.cardNumberInput.fill("1234567898765432");
    await this.cvcInput.fill("766");
    await this.expiryMonthInput.fill("01");
    await this.expiryYearInput.fill("2028");
  }

  async placeOrderAndPay() {
    await this.placeOrderLink.click();
    await this.fillPaymentDetails();
    await this.payButton.click();
    await this.page.waitForLoadState("networkidle", { timeout: 0 });
  }
}

module.exports = CheckoutPage;
