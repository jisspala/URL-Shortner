module.exports = {
  preset: 'ts-jest',
  roots: ['./src/tests'],
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
};
