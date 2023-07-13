const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './src',
})

const jestConfig = require('jest-config/jest.config.js')

const customJestConfig = {
  ...jestConfig,
  // 패키지별 설정을 여기에 추가
}

module.exports = createJestConfig(customJestConfig)
