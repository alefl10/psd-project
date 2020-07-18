module.exports = {
	parser: 'babel-eslint',
	extends: ['airbnb', 'plugin:react/recommended'],
	rules: {
		'no-console': 0,
		'import/no-dynamic-require': 0,
		'func-names': ['error', 'never'],
		indent: [2, 'tab'],
		'no-tabs': 0,
		'arrow-parens': ['error', 'as-needed'],
		'object-curly-newline': ['error', {
			ObjectExpression: { multiline: true, minProperties: 5 },
			ObjectPattern: { multiline: true, minProperties: 5 },
			ImportDeclaration: 'never',
			ExportDeclaration: { multiline: true, minProperties: 5 },
		}],
	},
};
