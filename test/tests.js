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
	
	it('can have methods', function() {
		var TestClass = new Class({
			toCheck: function() {
				return true;
			}
		});
		
		var test = new TestClass();
		
		expect(test.toCheck()).toEqual(true);
	});
	
	it('can extend another class', function() {
		var Animal = new Class({
			Constructor: function(name) {
				this.name = name;
			}
		});
		
		var Dog = new Class({
			Extends: Animal,
			Constructor: function(name) {
				this.parent(name);
			},
			bark: function() {
				return this.name + ' barked!';
			}
		});
		
		var SmallDog = new Class({
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
	
	it('can implement another class', function() {
		var Persistance = new Class({
			save: function(key, value) {
				localStorage.setItem(key, JSON.stringify(value));
			},
			load: function(key) {
				return JSON.parse(localStorage.getItem(key));
			},
			remove: function(key) {
				localStorage.removeItem(key);
			}
		});
		
		var PersistantObject = new Class({
			Implements: Persistance,
			Constructor: function(name) {
				this.name = name;
			},
			data: {},
			set: function(key, value) {
				this.data[key] = value;
			},
			get: function(key) {
				return this.data[key];
			},
			save: function() {
				this.parent(this.name, this.data);
			},
			load: function() {
				this.parent(this.name);
			},
			remove: function() {
				this.parent(this.name);
			}
		});
		
		var test = new PersistantObject('test');
		test.set('foo', 'bar');
		test.save();
		
		expect(test.get('foo')).toEqual('bar');
		
		var test2 = new PersistantObject('test');
		test2.load();
		
		expect(test2.get('foo')).toEqual('bar');
		
		test2.remove();
	});
});

// Display HTML output
var jasmineEnv = jasmine.getEnv();
jasmineEnv.reporter = new jasmine.TrivialReporter();
jasmineEnv.execute();