Package.defaultRoot = './packages';

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

describe('Registering', function() {
	it('can be registered', function() {
		var path = 'tests.RegisterTest',
			test = new Package(path).register();
		
		expect(Package.registeredPackages[path]).toEqual(true);
	});
});

describe('Loading', function() {
	it('can load another package', function() {
		waitsFor(function() {
			var path = 'tests.basic',
				basic = new Package({
					path: path,
					root: './packages'
				}).load(function() {
					expect(Package.registeredPackages[path]).toEqual(true);
					expect(createdByBasic).toEqual(true);
				});
		}, 'tests.basic to load', 2000);
	});
	
	it('can load another package using the defualt root', function() {
		waitsFor(function() {
			var path = 'tests.defaultRoot',
				basic = new Package(path).load(function() {
					expect(Package.registeredPackages[path]).toEqual(true);
					expect(createdByDefaultRoot).toEqual(true);
				});
		}, 'tests.defaultRoot to load', 2000);
	});
});

// Display HTML output
var jasmineEnv = jasmine.getEnv();
jasmineEnv.reporter = new jasmine.TrivialReporter();
jasmineEnv.execute();