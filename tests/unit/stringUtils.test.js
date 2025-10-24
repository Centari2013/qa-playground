/**
 * Unit tests for string utility functions
 * These tests demonstrate testing string manipulation functions
 */

const { capitalize, reverseString, isPalindrome, countVowels } = require('../../src/utils/stringUtils');

describe('String Utility Functions', () => {
  
  describe('capitalize()', () => {
    test('should capitalize first letter of lowercase string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('should keep already capitalized string', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    test('should handle single character', () => {
      expect(capitalize('a')).toBe('A');
    });

    test('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('should handle null or undefined', () => {
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
    });

    test('should handle non-string input', () => {
      expect(capitalize(123)).toBe('');
    });
  });

  describe('reverseString()', () => {
    test('should reverse a simple string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('should reverse a string with spaces', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('should handle single character', () => {
      expect(reverseString('a')).toBe('a');
    });

    test('should handle empty string', () => {
      expect(reverseString('')).toBe('');
    });

    test('should handle palindrome', () => {
      expect(reverseString('racecar')).toBe('racecar');
    });
  });

  describe('isPalindrome()', () => {
    test('should return true for simple palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    test('should return true for palindrome with spaces', () => {
      expect(isPalindrome('race car')).toBe(true);
    });

    test('should return true for palindrome with mixed case', () => {
      expect(isPalindrome('RaceCar')).toBe(true);
    });

    test('should return true for single character', () => {
      expect(isPalindrome('a')).toBe(true);
    });

    test('should return false for non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    test('should return false for empty string', () => {
      expect(isPalindrome('')).toBe(false);
    });

    test('should handle punctuation', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });
  });

  describe('countVowels()', () => {
    test('should count vowels in lowercase string', () => {
      expect(countVowels('hello')).toBe(2);
    });

    test('should count vowels in uppercase string', () => {
      expect(countVowels('HELLO')).toBe(2);
    });

    test('should count vowels in mixed case', () => {
      expect(countVowels('Hello World')).toBe(3);
    });

    test('should return zero for string with no vowels', () => {
      expect(countVowels('xyz')).toBe(0);
    });

    test('should return zero for empty string', () => {
      expect(countVowels('')).toBe(0);
    });

    test('should handle string with all vowels', () => {
      expect(countVowels('aeiou')).toBe(5);
    });
  });
});
