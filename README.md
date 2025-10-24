# qa-playground

A comprehensive QA workspace for learning Quality Assurance testing with Node.js. This repository provides practical examples of unit testing, API testing, and integration testing using popular testing frameworks.

## 🎯 Purpose

This workspace is designed to help you learn and practice:
- Writing unit tests with Jest
- API testing with Supertest
- Test-driven development (TDD)
- Code quality with ESLint
- Test coverage analysis

## 📦 Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework for building APIs
- **Jest** - Testing framework
- **Supertest** - HTTP assertion library
- **ESLint** - Code linting and quality
- **Mocha & Chai** - Alternative testing frameworks (installed for learning)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Centari2013/qa-playground.git
cd qa-playground
```

2. Install dependencies:
```bash
npm install
```

## 📂 Project Structure

```
qa-playground/
├── src/
│   ├── utils/           # Utility functions to test
│   │   ├── calculator.js
│   │   └── stringUtils.js
│   └── api/             # Express API application
│       ├── server.js
│       └── index.js
├── tests/
│   ├── unit/            # Unit tests
│   │   ├── calculator.test.js
│   │   └── stringUtils.test.js
│   ├── api/             # API tests
│   │   └── userApi.test.js
│   └── integration/     # Integration tests (for future examples)
├── jest.config.js       # Jest configuration
├── .eslintrc.json       # ESLint configuration
└── package.json         # Project dependencies and scripts
```

## 🧪 Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in watch mode (auto-rerun on file changes):
```bash
npm run test:watch
```

### Run only unit tests:
```bash
npm run test:unit
```

### Run only API tests:
```bash
npm run test:api
```

### Generate test coverage report:
```bash
npm run test:coverage
```

## 🏃 Running the API Server

Start the Express API server:
```bash
npm start
```

The server will start on `http://localhost:3000`

### Available API Endpoints:

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user
- `GET /health` - Health check endpoint

## 🔍 Code Quality

### Run linter:
```bash
npm run lint
```

### Fix linting issues automatically:
```bash
npm run lint:fix
```

## 📚 Learning Resources

### Unit Testing (calculator.js)
- Basic assertions with Jest
- Testing edge cases
- Error handling tests
- Testing mathematical operations

### String Utilities (stringUtils.js)
- Testing string manipulations
- Handling null/undefined inputs
- Testing with various data types

### API Testing (userApi.test.js)
- HTTP request testing
- Status code assertions
- Response body validation
- CRUD operations testing
- Error scenario testing

## 🎓 Testing Best Practices

1. **Arrange-Act-Assert (AAA)**: Structure your tests clearly
2. **Test Isolation**: Each test should be independent
3. **Descriptive Names**: Use clear test descriptions
4. **Edge Cases**: Test boundary conditions
5. **Error Cases**: Test error handling
6. **Coverage**: Aim for high code coverage

## 📝 Example Test

```javascript
describe('Calculator', () => {
  test('should add two numbers correctly', () => {
    // Arrange
    const a = 2;
    const b = 3;
    
    // Act
    const result = add(a, b);
    
    // Assert
    expect(result).toBe(5);
  });
});
```

## 🤝 Contributing

Feel free to add more test examples, utilities, or improvements to help others learn QA testing!

## 📄 License

ISC
