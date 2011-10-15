/**
 * @preserve Package.js - Add package support to the browser
 * Copyright 2011, Oliver Caldwell (olivercaldwell.co.uk)
 *
 * Licenced under GPL v3 <http://www.gnu.org/licences/gpl.html>
 **/

(function(exports) {
	'use strict';
	
	/**
	 * Base package class
	 *
	 * @param {String|Object} settings This can either be the path string or a settings object to pass to the set method
	 **/
	function Package(settings) {
		// Grab a copy of the instance
		var instance = this;
		
		// Initialise the settings object
		instance.settings = {};
		
		/**
		 * Sets a setting or settings depending on whether you pass a string or object
		 *
		 * @param {String|Object} target Either the name of the setting to set or an object of key value pairs to set
		 * @param {Mixed} value The value to set the target to if the target is a string
		 **/
		instance.set = function(target, value) {
			// Initialise required variables
			var key = null;
			
			// If the target is a string, just set it
			// Otherwise it is an object, loop over setting the values
			if(typeof target === 'string') {
				instance.settings[target] = value;
			}
			else {
				for(key in target) {
					if(target.hasOwnProperty(key)) {
						instance.set(key, target[key]);
					}
				}
			}
			
			// Return this to allow chaining
			return instance;
		};
		
		/**
		 * Retrieves a setting
		 *
		 * @param {String} target Name of the value to retrieve, such as `path`
		 * @returns {Mixed} The value of the target
		 **/
		instance.get = function(target) {
			// Return the setting
			return instance.settings[target];
		};
		
		/**
		 * Registers the package in the global object, Package.registeredPackages
		 * Requires the path to have been set
		 **/
		instance.register = function() {
			// Get the path
			var path = instance.get('path');
			
			// Make sure we have a path
			if(path) {
				// Register the package
				Package.registeredPackages[path] = true;
			}
			
			// Return this to allow chaining
			return instance;
		};
		
		/**
		 * Loads the current package and calls the passed callback when done
		 *
		 * @param {Function} callback Function to be run on completion
		 **/
		instance.load = function(callback) {
			// Get the root path. Either this.root, Package.defaultRoot or ''
			var root = instance.settings.root || Package.defaultRoot || '';
			
			// Remove any trailing slashes from the root
			root.replace(/\/$/, '');
			
			// Return this to allow chaining
			return instance;
		};
		
		// Check the settings type
		if(typeof settings === 'string') {
			// It is a string, set the path to it
			instance.set('path', settings);
		}
		else {
			// It must be an object, pass it to the set method
			instance.set(settings);
		}
	}
	
	/**
	 * Object for storing registered packages
	 **/
	Package.registeredPackages = {};
	
	// Expose the variables
	exports.Package = Package;
}(window));