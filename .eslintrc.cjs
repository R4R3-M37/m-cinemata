module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:boundaries/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		allowImportExportEverywhere: true
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		'import/resolver': { typescript: {} },
		'boundaries/elements': [
			{ type: 'app', pattern: 'app/*' },
			{
				type: 'processes',
				pattern: 'processes/*'
			},
			{ type: 'pages', pattern: 'pages/*' },
			{ type: 'widgets', pattern: 'widgets/*' },
			{
				type: 'features',
				pattern: 'features/*'
			},
			{ type: 'entities', pattern: 'entities/*' },
			{ type: 'shared', pattern: 'shared/*' }
		],
		'boundaries/ignore': ['**/*.tests.*']
	},
	ignorePatterns: ['*.test.js'],
	rules: {
		'import/no-named-as-default': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc', caseInsensitive: true },
				'newlines-between': 'always',
				pathGroups: [
					{ group: 'internal', position: 'after', pattern: '~/processes/**' },
					{
						group: 'internal',
						position: 'after',
						pattern: '~/pages/**'
					},
					{ group: 'internal', position: 'after', pattern: '~/widgets/**' },
					{
						group: 'internal',
						position: 'after',
						pattern: '~/features/**'
					},
					{ group: 'internal', position: 'after', pattern: '~/entities/**' },
					{
						group: 'internal',
						position: 'after',
						pattern: '~/shared/**'
					}
				],
				pathGroupsExcludedImportTypes: ['builtin'],
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
			}
		],
		'boundaries/element-types': [
			'warn',
			{
				default: 'disallow',
				rules: [
					{
						from: 'app',
						allow: ['processes', 'pages', 'widgets', 'features', 'entities', 'shared']
					},
					{ from: 'processes', allow: ['pages', 'widgets', 'features', 'entities', 'shared'] },
					{
						from: 'pages',
						allow: ['widgets', 'features', 'entities', 'shared']
					},
					{ from: 'widgets', allow: ['features', 'entities', 'shared'] },
					{
						from: 'features',
						allow: ['entities', 'shared']
					},
					{ from: 'entities', allow: ['shared'] },
					{ from: 'shared', allow: ['shared'] }
				]
			}
		]
	}
}