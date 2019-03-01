// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/vuejs.md#vuejs

// eslint-disable-next-line func-names
module.exports = function (config) {
	config.set({
		mutate: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue'],
		mutator: 'vue',

		reporters: ['progress', 'clear-text', 'html'],
		coverageAnalysis: 'off',

		testRunner: 'mocha',
		mochaOptions: {
			files: ['test/**/*.js'],
			ui: 'bdd',
			timeout: 3000,
			require: [
				'@babel/polyfill',
				'@babel/register',
			],
			grep: /.*/,
		},
	});
};
