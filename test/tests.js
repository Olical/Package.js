describe('Class', function () {
	it('can be initialised', function() {
		var TestClass = new Class({
			Constructor: function() {
				this.toCheck = true;
			}
		});
		
		var test = new TestClass();
		
		expect(test.toCheck).toEqual(true);
	});
});

// Display HTML output
var jasmineEnv = jasmine.getEnv();
jasmineEnv.reporter = new jasmine.TrivialReporter();
jasmineEnv.execute();