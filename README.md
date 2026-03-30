# 🎭 Playwright Automation Testing Project

This repository contains an **end-to-end (E2E) automation testing project** built using **Playwright**, a Node.js-based testing framework. The goal is to validate web application flows, UI behavior, and core functionalities through reliable automated tests.

## ⚙️ Installation & Setup

1️⃣ Clone the repository:

git clone https://github.com/Tawwwhid/Playwright.git
cd Playwright

2️⃣ Install dependencies:

npm install

3️⃣ Install Playwright browsers:

npx playwright install

## ▶️ Running Tests

- Run all tests (headless mode):

npx playwright test

- Run tests in headed mode (browser visible):

npx playwright test --headed

- Run a specific test:

npx playwright test tests/example.spec.js

- Generate an HTML test report:

npx playwright show-report

## 🔄 CI/CD Integration (GitHub Actions)

This project includes a built-in GitHub Actions workflow located at `.github/workflows/playwright.yml`.  
On every **push** or **pull request**, tests run automatically across supported browsers.

## 🛠 Configuration

Test behavior is controlled via `playwright.config.js`. You can configure:
- Browser choice  
- Test retries  
- Timeouts  
- Reports  
- Parallel execution
