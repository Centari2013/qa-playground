/**
 * Unit tests for calculator utility functions
 * These tests demonstrate basic unit testing concepts in Jest
 */

const { add, subtract, multiply, divide } = require('../../src/utils/calculator');

describe('Calculator Utility Functions', () => {
  
  describe('add()', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });

    test('should handle decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });
  });

  describe('subtract()', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should handle zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply()', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('should multiply negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(2, -3)).toBe(-6);
    });

    test('should return zero when multiplying by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe('divide()', () => {
    test('should divide two positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    test('should divide negative numbers', () => {
      expect(divide(-6, -3)).toBe(2);
    });

    test('should handle decimal results', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });

    test('should return zero when dividing zero', () => {
      expect(divide(0, 5)).toBe(0);
    });
  });
});
