# Cypress Automation Assessment

## ✅ Test Cases Covered

### UI Automation
- **Test Case (A)**: Registration Flow with Login Validation
- **Test Case (B)**: Place Order with Multiple Products (with price checks)
- **Test Case (C)**: Add Products in Wishlist and Checkout from Wishlist
- **Test Case (D)**: Search Products and Validate Result

### API Automation (Postman)
- **POST** `/pet`: Add a new pet to the store
- **GET** `/pet/{petId}`: Fetch pet details

### Manual Testing
- 5 high-priority manual test scenarios in `MagentoStoreTestCases.xlsx`

## 🛠️ Installation & Setup

### 1. Clone the Repository
### 2. Install Dependencies
`npm install`
### 2. Add Environment Variables
Added url under env section in cypress.config.js file

## Running the Tests

- Run all tests: npm run test
- Open Cypress UI: npm run open

## Generate HTML Report
- npm run test
- npm run test:report
