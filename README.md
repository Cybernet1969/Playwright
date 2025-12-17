# Playwright BDD Test Automation

## 📋 Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd "Playwright BDD"
```

### 2. Install Dependencies
```bash
npm install
```

## 🎯 Running Tests

### Desktop Browser Tests
```bash
# Chrome/Chromium
npm run test:chrome

# Microsoft Edge  
npm run test:edge

# Firefox
npm run test:firefox

# Safari
npm run test:safari
```

### Mobile Device Tests
```bash
# Android (Pixel 5)
npm run test:android

# iPhone (iPhone 12)
npm run test:iphone
```

### Cross-Platform Tests
```bash
# Run on all desktop browsers
npm run test:desktop

# Run on all mobile devices
npm run test:mobile

# Run on all platforms (desktop + mobile)
npm run test:all

# Run specific combinations
npx playwright test --project=Chrome --project=Android
```

### View Test Reports
```bash
# Open HTML test report
npm run test:report
```

## 🛠️ Development Commands

### Code Quality
```bash
# Format code with Prettier
npm run format

# Check code formatting
npm run format:check

# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix
```

### CI Pipeline
```bash
# Run full CI pipeline (lint + format check + tests)
npm run ci
```
