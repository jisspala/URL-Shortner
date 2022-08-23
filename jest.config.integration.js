module.exports = {
  preset: 'ts-jest',
  roots: ['./src/tests/integration'],
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
};
