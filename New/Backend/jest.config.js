module.exports = {
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  verbose: true,
};
