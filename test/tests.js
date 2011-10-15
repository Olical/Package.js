describe('Initialisation', function() {
	it('can be initialised', function() {
		var test = new Package();
	});
	
	it('can be initialised with a path to set', function() {
		var test = new Package('tests.MainTest');
	});
	
	it('can be initialised with an object to set', function() {
		var test = new Package({
			path: 'tests.MainTest',
			root: '/assets/javascript/packages'
		});
	});
});

// Display HTML output
var jasmineEnv = jasmine.getEnv();
jasmineEnv.reporter = new jasmine.TrivialReporter();
jasmineEnv.execute();