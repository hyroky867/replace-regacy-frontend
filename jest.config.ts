import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'jest-puppeteer',
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
  };
};
