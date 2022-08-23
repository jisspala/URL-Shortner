module.exports = {
  preset: 'ts-jest',
  roots: ['./src/tests/end-to-end'],
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
};
