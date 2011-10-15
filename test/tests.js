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

describe('Settings', function() {
	it('can have a path set', function() {
		var test = new Package().set('path', 'tests.MainTest');
	});
	
	it('can have a path and root set', function() {
		var test = new Package().set({
			path: 'tests.MainTest',
			root: '/assets/javascript/packages'
		});
	});
	
	it('can have its path retrived', function() {
		var path = 'tests.MainTest',
			test = new Package(path);
		
		expect(test.get('path')).toEqual(path);
	});
});

// Display HTML output
var jasmineEnv = jasmine.getEnv();
jasmineEnv.reporter = new jasmine.TrivialReporter();
jasmineEnv.execute();