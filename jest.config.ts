import type { Config } from 'jest'

const config: Config = {
	moduleFileExtensions: ['js', 'json', 'ts'],
	rootDir: 'src',
	testRegex: '.*\\.spec\\.ts$',
	transform: {
		'^.+\\.(t|j)s$':
			process.env.JEST_TS_TRANSFORMER ?? '@swc/jest',
	},
	collectCoverageFrom: ['**/*.(t|j)s'],
	coverageDirectory: '../coverage',
	testEnvironment: 'node',
}

export default config
