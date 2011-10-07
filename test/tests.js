describe('Class', function () {
	it('can be initialised', function() {
		var TestClass = new Structure.Class({
			Constructor: function() {
				this.toCheck = true;
			}
		});
		
		var test = new TestClass();
		
		expect(test.toCheck).toEqual(true);
	});
	
	it('can have methods', function() {
		var TestClass = new Structure.Class({
			toCheck: function() {
				return true;
			}
		});
		
		var test = new TestClass();
		
		expect(test.toCheck()).toEqual(true);
	});
});

// Display HTML output
var jasmineEnv = jasmine.getEnv();
jasmineEnv.reporter = new jasmine.TrivialReporter();
jasmineEnv.execute();