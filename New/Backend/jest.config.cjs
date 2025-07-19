module.exports = {
  testEnvironment: 'node',                     // Simulates a Node.js environment
  transform: {
    '^.+\\.js$': 'babel-jest',                 // Use babel-jest to transpile JS files
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',              // Fix import paths like './file.js'
  },
  verbose: true,                               // Show detailed test output
};
