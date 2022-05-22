module.exports = {
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/jest/setup.js',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/components/**/*.tsx',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
  ],
  // automock: true,
};
