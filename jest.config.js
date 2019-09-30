module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{js, jsx}'],
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        "^components(.*)$": "<rootDir>/src/components$1",
    },
    setupFiles: ['<rootDir>/enzyme.config.js'],
    setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
    testEnvironment: 'enzyme',
    testMatch: ['**/__tests__/**/*-test.js(x)'],
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/src/index.jsx'],
    testURL: 'http://localhost:8080',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
        "^.+\\.jsx$": "babel-jest",
        "^.+\\.js$": "babel-jest"
    },
    verbose: false
};