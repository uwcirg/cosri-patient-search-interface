module.exports = {
    clearMocks: true,
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFiles: ['./enzyme.config.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    transformIgnorePatterns: ['./node_modules/'],
    moduleNameMapper: {
        "^[./a-zA-Z0-9$_-]+\\.(png|jpeg|tiff|ico)$": "<rootDir>/src/__mocks__/fileMock.js",
        "^[./a-zA-Z0-9$_-]+\\.(css|scss|less)$": "<rootDir>/src/__mocks__/styleMock.js"
        },
    verbose: true
}