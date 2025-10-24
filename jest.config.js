module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/api/index.js', // Exclude server startup file
  ],
  testMatch: [
    '**/tests/**/*.test.js',
  ],
  verbose: true,
};
