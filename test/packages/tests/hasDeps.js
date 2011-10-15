(function() {
	var hasDeps = new Package({
		path: 'tests.hasDeps',
		dependencies: [
			'tests.deps.depOne',
			'tests.deps.depTwo'
		]
	}).loadDependencies(function() {
		window.dependencyValue = depOneValue + depTwoValue; // 30
	}).register();
}());