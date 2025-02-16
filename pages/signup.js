const { Page } = require('@playwright/test');

class SignupPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      nameInput: 'input[name="name"]',
      emailInput: 'form:has-text("Signup") input[name="email"]',
      signupButton: 'button:has-text("Signup")',
      genderRadio: 'input[id="id_gender1"]',
      passwordInput: 'input[name="password"]',
      dayDropdown: '#days',
      monthDropdown: '#months',
      yearDropdown: '#years',
      firstNameInput: 'input[name="first_name"]',
      lastNameInput: 'input[name="last_name"]',
      companyInput: 'input[name="company"]',
      address1Input: 'input[name="address1"]',
      address2Input: 'input[name="address2"]',
      countryDropdown: 'select[name="country"]',
      stateInput: 'input[name="state"]',
      cityInput: 'input[name="city"]',
      zipcodeInput: 'input[name="zipcode"]',
      mobileInput: 'input[name="mobile_number"]',
      createAccountButton: 'button:has-text("Create Account")',
      successMessage: 'h2:has-text("Account Created!")',
      logoutButton: 'a[href="/logout"]', 

    };
  }

  async navigateToSignupPage() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async enterSignupInfo(userData) {
    await this.page.fill(this.locators.nameInput, userData.name);
    await this.page.fill(this.locators.emailInput, userData.email);
    await this.page.click(this.locators.signupButton);
  }

  async selectBirthdate(userData) {
    await this.page.selectOption(this.locators.dayDropdown, userData.day);
    await this.page.selectOption(this.locators.monthDropdown, userData.month);
    await this.page.selectOption(this.locators.yearDropdown, userData.year);
  }

  async fillPersonalDetails(userData) {
    await this.page.fill(this.locators.firstNameInput, userData.firstName);
    await this.page.fill(this.locators.lastNameInput, userData.lastName);
    await this.page.fill(this.locators.companyInput, userData.company);
  }

  async fillAddressDetails(userData) {
    await this.page.fill(this.locators.address1Input, userData.address1);
    await this.page.fill(this.locators.address2Input, userData.address2);
    await this.page.selectOption(this.locators.countryDropdown, userData.country);
    await this.page.fill(this.locators.stateInput, userData.state);
    await this.page.fill(this.locators.cityInput, userData.city);
    await this.page.fill(this.locators.zipcodeInput, userData.zipcode);
    await this.page.fill(this.locators.mobileInput, userData.mobile);
  }

  async submitSignupForm(userData) {
    await this.page.check(this.locators.genderRadio);
    await this.page.fill(this.locators.passwordInput, userData.password);
    await this.page.click(this.locators.createAccountButton);
  }

  async confirmAccountCreation() {
    await this.page.waitForSelector(this.locators.successMessage);
  }
  
  async logout() {
    await this.page.click(this.locators.logoutButton);
    await this.page.waitForNavigation();
  }


  async signUp(userData) {
    await this.navigateToSignupPage();
    await this.enterSignupInfo(userData);
    await this.selectBirthdate(userData);
    await this.fillPersonalDetails(userData);
    await this.fillAddressDetails(userData);
    await this.submitSignupForm(userData);
    await this.confirmAccountCreation();
    await this.page.waitForLoadState('networkidle', { timeout: 100000 });
  }
}

module.exports = SignupPage;
