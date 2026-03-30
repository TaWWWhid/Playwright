# 🎭 Playwright Automation Testing Project

This repository contains an end-to-end (E2E) automation testing project built using Playwright, a powerful Node.js-based testing framework. The goal is to validate web application flows, UI behavior, and core functionalities through reliable automated tests.

---

## 📋 Overview
* **Framework:** Playwright (JavaScript)
* **Browsers Supported:** Chromium, Firefox, WebKit
* **Testing Type:** End-to-End UI Automation
* **CI/CD:** GitHub Actions Integration
* **Status:** 🟢 Ready for local execution & CI integration

---

## 📁 Project Structure
.
├── .github/workflows/
│   └── playwright.yml      # CI/CD configuration
├── tests/
│   ├── example.spec.js     # Example test scripts
│   └── auth.json           # Auth state storage
├── playwright.config.js    # Playwright configuration
├── package.json            # Dependencies & scripts
└── package-lock.json

---

## 🚀 Features
* **Cross-browser automation:** Test on Chrome, Firefox, and WebKit.
* **Auto-waiting:** Native support for element stability.
* **Fast & Reliable:** Parallel execution for faster feedback.
* **CLI Test Runner:** Powerful command-line interface.
* **GitHub Actions:** Automated workflow for CI/CD.
* **HTML Reporting:** Detailed test reports with trace viewer.

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository
git clone [https://github.com/Tawwwhid/Playwright.git](https://github.com/Tawwwhid/Playwright.git)
cd Playwright

2️⃣ Install dependencies
npm install

3️⃣ Install Playwright browsers
npx playwright install

---

## ▶️ Running Tests

Run all tests (Headless mode):
npx playwright test

Run tests in Headed mode (Browser visible):
npx playwright test --headed

Run a specific test file:
npx playwright test tests/example.spec.js

Generate and view HTML report:
npx playwright show-report

---

## 🛠️ Configuration
You can customize the testing environment in playwright.config.js, including timeouts, base URLs, and browser-specific options.

---
⭐ Give this repo a star if you find it helpful!
