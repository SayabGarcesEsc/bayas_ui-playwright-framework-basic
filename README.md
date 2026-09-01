# bayas_ui-playwright-framework-basic

A lightweight UI automation framework built with Playwright and TypeScript. Designed for simplicity, speed, and reliability.

## 🚀 Features

* **TypeScript First:** Native TypeScript support for type safety.
* **Lightweight:** Minimal dependencies for fast execution.

## 📋 Prerequisites

Before installing, ensure you have the following installed:
* [Node.js](https://nodejs.org) (v24 used in this PR)
* npm (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd bayas_ui-playwright-framework-basic
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🏃 Running Tests

Execute your automation scripts with the following commands:

* **Run all tests:**
  ```bash
  npx playwright test
  ```

* **Run tests in headed mode (UI visible):**
  ```bash
  npx playwright test --headed
  ```

* **Run a specific test file:**
  ```bash
  npx playwright test tests/example.spec.ts
  ```

* **Open Playwright UI mode:**
  ```bash
  npx playwright test --ui
  ```

## 📁 Project Structure

```text
├── tests/                 # Test script files (.spec.ts)
├── playwright.config.ts   # Playwright configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## 📊 Reports

HTML reports are generated automatically after a test run. To view the latest report, use:
```bash
npx playwright show-report
```

## 📝 License

This project is licensed under the MIT License.
