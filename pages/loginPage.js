class LoginPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      emailInput: "input[name='email']",
      passwordInput: "[data-qa='login-password']",
      loginButton: "[data-qa='login-button']",
      logoutButton:"a[href='/logout']"
    };
  }

  async navigateToLoginPage() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async waitForEmailInput() {
    await this.page.waitForSelector(this.locators.emailInput);
  }

  async enterCredentials(email, password) {
    await this.waitForEmailInput();
    await this.page.fill(this.locators.emailInput, email);
    await this.page.fill(this.locators.passwordInput, password);
  }

  async submitLogin() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click(this.locators.loginButton)
    ]);
  }
  async logout() {
    await this.page.click(this.locators.logoutButton);
    await this.page.waitForLoadState('networkidle', { timeout: 0 });
  }

  async login(email, password) {
    await this.navigateToLoginPage();
    await this.logout();
    await this.enterCredentials(email, password);
    await this.submitLogin();
    await this.page.waitForLoadState('networkidle', { timeout: 0 });
  }
}

module.exports = LoginPage;
