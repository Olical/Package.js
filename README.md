# About

Package.js is a script to add package support to the browser, as you may have guessed from the name. This allows you to create modular, reusable code in the browser, which is great for larger projects.

The packages must have a directory structure that matches their package string. So a package string of `graphics.canvas.Image` would be stored in `graphics/canvas/Image.js`.

# Compatibility

Package.js is tested and works in the following browsers.

 * Chrome
 * FireFox
 * Safari
 * Opera
 * IE 5.5+

I am sure it works in many more, but that is all I can get my hands on. All testing is done with [jasmine](https://jasmine.github.io/).

# Quickstart

If you want to get going as fast as possible then have a skim over the API and follow the instructions below.

First things first, your going to need to include `Package.js` in your page, so download it and create a script tag to load it like so.

	<script type='text/javascript' src='/path/to/Package.js'></script>

You will also need a main script for you application, so create that and include it too. You can put all of your useful and cool code up the top of that file. The only thing you need to do is register your file.

	// Fisrt things first, lets set the location of our packages
	// This is not required, but saves passing the root to every package initialisation
	Package.defaultRoot = '/assets/javascript/packages';
	
	// Now lets create the package instance
	var myScript = new Package('myApp.myScript'); // You can also pass a settings object
	
	// Some epic JavaScript up here
	// It does such cool stuff that you can even see it!
	// Amazing right!?
	
	// And now at the bottom of the file we register our package
	myScript.register();

Now your script is registered, pretty easy right. But I would imagine that you will need to load another package for your script to work. You can do that like so.

	var moreJs = new Package('myApp.moreJs').load(function() {
		// Any code within this block can be assured that the script has loaded
		// When you call register at the bottom of your script it runs this code block, so ALWAYS call it at the bottom
	});

But what if your script requires more than one script, say it has a list of dependencies. Well, theres an easy way around that. Here is the same script as before but with a dependency array.

	// Fisrt things first, lets set the location of our packages
	// This is not required, but saves passing the root to every package initialisation
	Package.defaultRoot = '/assets/javascript/packages';
	
	// Now lets create the package instance
	var myScript = new Package({
		path: 'myApp.myScript',
		dependencies: [
			'libraries.mootools',
			'libraries.jquery',
			'classes.tweet'
		]
	}).loadDependencies(function() {
		// Remember to place all code that requires the dependencies in this callback!
		// And also remember to stick the register statement in here!
		// I'm serious. Stuff will really start to break if you don't do what I say!
		
		// Some epic JavaScript up here
		// It does such cool stuff that you can even see it!
		// Amazing right!?
		
		// And now at the bottom of the file we register our package
		myScript.register();
	});

I hope this has been enough to get you going. If not, just have a look at the source and the API. You will be able to work out anything you need. You may also find the examples section very helpful.

# Examples

## Main script

	// Set the default package root
	Package.defaultRoot = '/assets/javascript/packages';
	
	// Initialise the main scripts package
	var mainScript = new Package({
		path: 'myApp.mainScript',
		dependencies: [
			'frameworks.MooTools', // /assets/javascript/packages/frameworks/mootools.js
			'myApp.classes.TweetLoader' // /assets/javascript/packages/myApp/classes/TweetLoader.js
		]
	}).loadDependencies(function() {
		// Main scripts code goes here
		
		// Register the package
		mainScript.register();
	});

## Class or general script to be used by main

	// Initialise package
	var TweetLoader = new Package('myApp.classes.TweetLoader');
	
	// Your code to be loaded here
	
	// Register the package
	TweetLoader.register();

## Converted framework to use as a package

	// Initialise package
	var mootools = new Package('frameworks.mootools');
	
	// Original code from framework here
	
	// Register the package
	mootools.register();

## Loading a package outside of the dependency array

	// Register and load the package
	var mootools = new Package('frameworks.mootools').load(function() {
		// Code that uses the package here
		// Because this will be called when it is loaded / when mootools.register() is called
	});

# API

## Methods

The following list is a list of methods available to instances of the Package class. You can create a new instance like so.

	var packageInstance = new Package();

The API is taken from the JSDoc comments which you can find inside the source file.

 * `Package(settings)` - Base package class
  * **param** {String|Object} settings This can either be the path string or a settings object to pass to the set method

 * `packageInstance.set(target, value)` - Sets a setting or settings depending on whether you pass a string or object
  * **param** {String|Object} target Either the name of the setting to set or an object of key value pairs to set
  * **param** {Mixed} value The value to set the target to if the target is a string
  * **returns** {Object} Returns the instance to allow chaining

 * `packageInstance.get(target)` - Retrieves a setting
  * **param** {String} target Name of the value to retrieve, such as `path`
  * **returns** {Mixed} The value of the target

 * `packageInstance.register()` - Registers the package in the global object, Package.registeredPackages. Requires the path to have been set
  * **returns** {Object} Returns the instance to allow chaining

 * `packageInstance.loadDependencies(callback)` - Loads all of the dependencies for a package
  * **param** {Function} callback Function to be run on completion
  * **returns** {Object} Returns the instance to allow chaining

 * `packageInstance.load(callback)` - Loads the current package and calls the passed callback when done
  * **param** {Function} callback Function to be run on completion
  * **returns** {Object} Returns the instance to allow chaining

## Settings

A settings object can be passed to the set method or the constructor. Here is an example settings object.

	packageInstance.set({
		path: 'x.y.z',
		root: './foo',
		dependencies: [
			'x.y.foo',
			'x.y.bar'
		]
	});

 * **path** - This is the path to the package to load or register. It must match the directory structure. So `graphics.canvas.Image` would point to `graphics/canvas/Image.js`
 * **root** - This is the root path to load the package from, it will also be inherited by its dependencies. With a root of `./foo` the previous example would point to `./foo/graphics/canvas/Image.js`
 * **dependencies** - This is an array of settings objects or string, it is passed to the constructor of the Package class, so works how you would expect. These will be loaded when you call `loadDependencies`

# Author

Written by [Oliver Caldwell](http://olivercaldwell.co.uk/).

# Licence

Add class and package support to the browser
	
Copyright (C) 2011 Oliver Caldwell

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licences/gpl.html>.
