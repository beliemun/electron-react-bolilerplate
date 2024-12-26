import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@assets(.*)$': '<rootDir>/src/renderer/assets$1',
    '^@common(.*)$': '<rootDir>/src/renderer/common$1',
    '^@components(.*)$': '<rootDir>/src/renderer/components$1',
    '^@hooks(.*)$': '<rootDir>/src/renderer/hooks$1',
    '^@libs(.*)$': '<rootDir>/src/renderer/libs$1',
    '^@pages(.*)$': '<rootDir>/src/renderer/pages$1',
    '^@routes(.*)$': '<rootDir>/src/renderer/routes$1',
    '^@stores(.*)$': '<rootDir>/src/renderer/stores$1',
    '^@styles(.*)$': '<rootDir>/src/renderer/styles$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};

export default config;
