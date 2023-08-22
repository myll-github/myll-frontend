// this should be require('./tsconfig.json')) but i will not change root alias so it does not change
const tsConfig = {
  compilerOptions: {
    paths: {
      '@/*': ['./src/*'],
    },
  },
}

const aliasPathObj = {}

Object.entries(tsConfig.compilerOptions.paths).forEach(([key, path]) => {
  aliasPathObj[key.split('/*')[0] + '/' + '(.*)$'] = `<rootDir>/${String(path[0]).substring(0, path[0].length - 2)}/$1`
})

module.exports = {
  globals: {
    __DEV__: true,
  },

  preset: 'ts-jest',
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  // setupFilesAfterEnv: ['<rootDir>/environment/jest/jest.setup.js'],
  collectCoverageFrom: [
    '**/*.test.{ts,tsx,js,jsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modulesld',

    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',

    ...aliasPathObj,
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|[tj]sx|ts)?$': ['ts-jest', { isolatedModules: true }],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', '/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
}
