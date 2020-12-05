import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    'test-utils': '<rootDir>/utils/test-utils.tsx',
  },
};
export default config;
