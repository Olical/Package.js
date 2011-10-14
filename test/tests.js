describe('Defining', function () {
	it('can be initialised', function() {
		
	});
});

// Display HTML output
var jasmineEnv = jasmine.getEnv();
jasmineEnv.reporter = new jasmine.TrivialReporter();
jasmineEnv.execute();