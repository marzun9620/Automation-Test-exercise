class HomePage {
  constructor(page) {
    this.page = page;
    this.menCategoryHeading = this.page.getByRole("heading", { name: " Men" });
    this.menCategoryLink = this.page.getByRole("link", { name: " Men" });
    this.jeansLink = this.page.getByRole("link", { name: "Jeans" });
  }

  async navigateToMenCategory() {
    await this.menCategoryHeading.click();
    await this.menCategoryLink.click();
  }

  async navigateToJeansCategory() {
    await this.navigateToMenCategory();
    await this.jeansLink.click();
  }
}

module.exports = HomePage;
