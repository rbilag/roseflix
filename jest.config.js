module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: [ '<rootDir>/src/__test__/config/importJestDOM.ts' ]
};
