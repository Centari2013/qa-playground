/**
 * String utility functions for learning QA testing
 */

/**
 * Capitalize first letter of a string
 * @param {string} str - Input string
 * @returns {string} String with first letter capitalized
 */
function capitalize(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverse a string
 * @param {string} str - Input string
 * @returns {string} Reversed string
 */
function reverseString(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
}

/**
 * Check if a string is a palindrome
 * @param {string} str - Input string
 * @returns {boolean} True if palindrome, false otherwise
 */
function isPalindrome(str) {
  if (!str || typeof str !== 'string') {
    return false;
  }
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Count vowels in a string
 * @param {string} str - Input string
 * @returns {number} Number of vowels
 */
function countVowels(str) {
  if (!str || typeof str !== 'string') {
    return 0;
  }
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

module.exports = {
  capitalize,
  reverseString,
  isPalindrome,
  countVowels,
};
