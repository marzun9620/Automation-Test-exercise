const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const SignupPage = require('../pages/signup');
const HomePage = require('../pages/homePage');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');
const ContactUsPage = require('../pages/contactUsPage');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

function generateUniqueEmail() {
  return `user_${uuidv4()}@tekarsh.com`;
}

function generateUniqueName() {
  return `User_${uuidv4()}`;
}

test('Full E-commerce Flow with Signup', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const signupPage = new SignupPage(page);
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const contactUsPage = new ContactUsPage(page);

  const userData = {
    name: generateUniqueName(),
    email: generateUniqueEmail(),
    password: 'password123',
    day: '1',
    month: 'January',
    year: '1990',
    firstName: generateUniqueName(),
    lastName: generateUniqueName(),
    company: 'Example Corp',
    address1: '123 Main St',
    address2: 'Apt 4',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobile: `12345${uuidv4().split('-')[0]}`
  };

  await signupPage.signUp(userData);
  await loginPage.login(userData.email, userData.password);
  await homePage.navigateToJeansCategory();
  await productPage.addProductToCart(2);
  await cartPage.proceedToCheckout();
  await checkoutPage.placeOrderAndPay();

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download Invoice" }).click();
  await page.waitForLoadState("networkidle", { timeout: 0 });
  const download = await downloadPromise;
  console.log(`Invoice downloaded to: ${download.suggestedFilename()}`);

  const filePath = path.join(__dirname, '../dummy_file.txt');
  await contactUsPage.submitContactForm(
    userData.name,
    userData.email,
    'Test Subject',
    'This is a test message.',
    filePath
  );
}, {
  timeout: 180000
});
