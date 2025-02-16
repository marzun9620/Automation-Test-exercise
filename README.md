# E-commerce Automation with Playwright

This project is an end-to-end test automation suite for an e-commerce website(https://automationexercise.com) using Playwright. It automates the following user journey:

1. **Sign Up**: Creating a new user account.
2. **Login**: Logging into the user account.
3. **Product Browsing**: Navigating to the "Men's Jeans" category.
4. **Add Product to Cart**: Adding products to the cart.
5. **Checkout and Payment**: Completing the order process.
6. **Download Invoice**: Downloading the invoice after the order is placed.
7. **Contact Us Form**: Submitting a contact form with file upload.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v12 or higher)
- [Playwright](https://playwright.dev/docs/intro)

## Setup Instructions

### 1. Clone the Repository

To get started, clone this repository to your local machine.

```bash
git clone https://github.com/<your-username>/playwright-ecommerce-automation.git
cd playwright-ecommerce-automation
```
### 2. Install all dependencies
```bash
npm install
npx playwright install
npm install @playwright/test
```
### 2. Run the test file

```bash
npx playwright test automation.spec.js --headed
```
This will run the test with a visible browser window (headed mode). If you prefer to run it without the browser window (headless mode), use:

```bash
npx playwright test automation.spec.js --headless
```
### 3. Test Output

After running the tests, check the console output for logs, including any errors. If the test involves file downloads (e.g., the invoice), the file will be saved in your system's default download location.




