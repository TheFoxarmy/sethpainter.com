module.exports = {
	root: true,
	env: {
		browser: false,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	// add your custom rules here
	rules: {
		"vue/html-indent": [1, "tab"],
		"vue/max-attributes-per-line": 0,
		"indent": [1, "tab"],
		"allowIndentationTabs": 0,
		"no-tabs": 0,
		"semi": [1, "always"],
		"quotes": [1, "single"],
		"space-before-function-paren": [1, "never"],
		"curly": 0,
		"eqeqeq": 0,
		"arrow-parens": 0,
		"one-var": 0,
		"no-console": 0,
		"vue/attributes-order": 0
	}
}
