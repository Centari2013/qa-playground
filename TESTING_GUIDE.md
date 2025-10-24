# Testing Guide

## Table of Contents
1. [Introduction to Testing](#introduction-to-testing)
2. [Types of Tests](#types-of-tests)
3. [Writing Your First Test](#writing-your-first-test)
4. [Test Structure](#test-structure)
5. [Assertions](#assertions)
6. [Mocking and Stubbing](#mocking-and-stubbing)
7. [Best Practices](#best-practices)

## Introduction to Testing

Testing is the process of verifying that your code works as expected. Automated tests help you:
- Catch bugs early
- Prevent regressions
- Document code behavior
- Enable confident refactoring

## Types of Tests

### Unit Tests
Test individual functions or components in isolation.
- **Location**: `tests/unit/`
- **Example**: Testing a calculator function

### Integration Tests
Test how multiple components work together.
- **Location**: `tests/integration/`
- **Example**: Testing database operations with API endpoints

### API Tests (E2E)
Test the entire application through its API.
- **Location**: `tests/api/`
- **Example**: Testing REST endpoints

## Writing Your First Test

### Step 1: Create a Function
```javascript
// src/utils/math.js
function square(n) {
  return n * n;
}
module.exports = { square };
```

### Step 2: Write a Test
```javascript
// tests/unit/math.test.js
const { square } = require('../../src/utils/math');

describe('square()', () => {
  test('should return 4 when input is 2', () => {
    expect(square(2)).toBe(4);
  });
});
```

### Step 3: Run the Test
```bash
npm test
```

## Test Structure

Use the **Arrange-Act-Assert (AAA)** pattern:

```javascript
test('should calculate total price with tax', () => {
  // Arrange: Set up test data
  const price = 100;
  const taxRate = 0.1;
  
  // Act: Execute the function
  const total = calculateTotal(price, taxRate);
  
  // Assert: Verify the result
  expect(total).toBe(110);
});
```

## Assertions

Common Jest assertions:

```javascript
// Equality
expect(value).toBe(4);                    // Strict equality (===)
expect(value).toEqual({ a: 1, b: 2 });   // Deep equality

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();

// Numbers
expect(value).toBeGreaterThan(3);
expect(value).toBeLessThan(5);
expect(value).toBeCloseTo(0.3);          // For floating point

// Strings
expect(string).toMatch(/pattern/);
expect(string).toContain('substring');

// Arrays
expect(array).toContain(item);
expect(array).toHaveLength(3);

// Objects
expect(object).toHaveProperty('key');
expect(object).toMatchObject({ a: 1 });

// Exceptions
expect(() => fn()).toThrow();
expect(() => fn()).toThrow('error message');
```

## Mocking and Stubbing

### Why Mock?
- Isolate code under test
- Avoid external dependencies
- Control test conditions
- Speed up tests

### Example: Mocking a Function
```javascript
// Mock a module
jest.mock('../../src/utils/database');

// Create a mock function
const mockFn = jest.fn();
mockFn.mockReturnValue(42);
```

## Best Practices

### 1. Test One Thing at a Time
```javascript
// Good
test('should add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('should handle negative numbers', () => {
  expect(add(-2, -3)).toBe(-5);
});
```

### 2. Use Descriptive Test Names
```javascript
// Good
test('should return 404 when user does not exist', () => {
  // ...
});

// Bad
test('test user', () => {
  // ...
});
```

### 3. Test Edge Cases
- Empty inputs
- Null/undefined
- Boundary values
- Error conditions

### 4. Keep Tests Independent
Each test should run independently and not rely on other tests.

### 5. Don't Test Implementation Details
Focus on behavior, not how the code works internally.

### 6. Use Setup and Teardown
```javascript
describe('User API', () => {
  beforeEach(() => {
    // Setup before each test
  });
  
  afterEach(() => {
    // Cleanup after each test
  });
  
  test('...', () => {
    // Your test
  });
});
```

## Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test calculator.test.js

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run only unit tests
npm run test:unit

# Run only API tests
npm run test:api
```

## Next Steps

1. Write tests for a new utility function
2. Add more edge cases to existing tests
3. Achieve 100% test coverage
4. Practice TDD: Write tests first, then code
5. Learn about mocking and stubbing
