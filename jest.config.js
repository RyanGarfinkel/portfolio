// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require('next/jest.js');
 
const createJestConfig = nextJest({
  dir: './',
});
 
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'node',
};

module.exports = createJestConfig(config);
