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
	
	it('can extend another class', function() {
		var Animal = new Structure.Class({
			Constructor: function(name) {
				this.name = name;
			}
		});
		
		var Dog = new Structure.Class({
			Extends: Animal,
			Constructor: function(name) {
				this.parent(name);
			},
			bark: function() {
				return this.name + ' barked!';
			}
		});
		
		var SmallDog = new Structure.Class({
			Extends: Dog,
			Constructor: function(name) {
				this.parent(name);
			},
			bark: function() {
				return this.parent() + ' It was very quiet.';
			}
		});
		
		var test = new SmallDog('Gerty');
		
		expect(test.name).toEqual('Gerty');
		expect(test.bark()).toEqual('Gerty barked! It was very quiet.');
	});
});

// Display HTML output
var jasmineEnv = jasmine.getEnv();
jasmineEnv.reporter = new jasmine.TrivialReporter();
jasmineEnv.execute();