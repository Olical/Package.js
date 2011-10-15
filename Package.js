/**
 * @preserve Package.js - Add package support to the browser
 * Copyright 2011, Oliver Caldwell (olivercaldwell.co.uk)
 *
 * Licenced under GPL v3 <http://www.gnu.org/licences/gpl.html>
 **/

(function(exports) {
	'use strict';
	
	/**
	 * Class for working with script elements
	 * If both the path and callback are passed, load will be called
	 *
	 * @param {String} path Path to the script to load
	 * @param {Function} callack Function to call when the script has loaded
	 **/
	function Script(path, callback) {
		// If there is a path set it
		if(path) {
			this.setPath(path);
			
			// If there is a callback and a path, call load
			if(callback) {
				this.load(callback);
			}
		}
	}
	
	/**
	 * Sets the path to the script to load
	 *
	 * @param {String} path The path to the script to load
	 * @returns {Object} Returns the instance to allow chaining
	 **/
	Script.prototype.setPath = function(path) {
		this.path = path;
		
		// Return the instance to allow chaining
		return this;
	};
	
	/**
	 * Loads the script set with setPath
	 * Calls the passed callback when done
	 *
	 * @param {Function} callback Function to call when done
	 * @returns {Object} Returns the instance to allow chaining
	 **/
	Script.prototype.load = function(callback) {
		// Create the new element
		var script = document.createElement('script');
		
		// Set up the script element
		script.src = this.path;
		script.type = 'text/javascript';
		
		// Make sure we have a callback before attatching events
		if(callback) {
			// Check if we have to use the IE version
			if(typeof script.onreadystatechange !== 'undefined') {
				// Wait for the onreadystatechange event
				script.attachEvent('onreadystatechange', function() {
					// When fired check the state
					if(script.readyState === 'complete') {
						// Because the state is complete we can call the callback
						callback();
					}
				});
			}
			else {
				// Wait for the load event
				script.addEventListener('load', callback);
			}
		}
		
		// Inject the script into the head
		document.head.appendChild(script);
		
		// Return the instance to allow chaining
		return this;
	};
	
	/**
	 * Base package class
	 *
	 * @param {String|Object} settings This can either be the path string or a settings object to pass to the set method
	 **/
	function Package(settings) {
		// Initialise the settings object
		this.settings = {};
		
		// Check the settings type
		if(typeof settings === 'string') {
			// It is a string, set the path to it
			this.set('path', settings);
		}
		else {
			// It must be an object, pass it to the set method
			this.set(settings);
		}
	}
	
	/**
	 * Sets a setting or settings depending on whether you pass a string or object
	 *
	 * @param {String|Object} target Either the name of the setting to set or an object of key value pairs to set
	 * @param {Mixed} value The value to set the target to if the target is a string
	 * @returns {Object} Returns the instance to allow chaining
	 **/
	Package.prototype.set = function(target, value) {
		// Initialise required variables
		var key = null;
		
		// If the target is a string, just set it
		// Otherwise it is an object, loop over setting the values
		if(typeof target === 'string') {
			this.settings[target] = value;
		}
		else {
			for(key in target) {
				if(target.hasOwnProperty(key)) {
					this.set(key, target[key]);
				}
			}
		}
		
		// Return the instance to allow chaining
		return this;
	};
	
	/**
	 * Retrieves a setting
	 *
	 * @param {String} target Name of the value to retrieve, such as `path`
	 * @returns {Mixed} The value of the target
	 **/
	Package.prototype.get = function(target) {
		// Return the setting
		return this.settings[target];
	};
	
	/**
	 * Registers the package in the global object, Package.registeredPackages
	 * Requires the path to have been set
	 * @returns {Object} Returns the instance to allow chaining
	 **/
	Package.prototype.register = function() {
		// Get the path
		var path = this.get('path');
		
		// Make sure we have a path
		if(path) {
			// Register the package
			Package.registeredPackages[path] = true;
		}
		
		// Return the instance to allow chaining
		return this;
	};
	
	/**
	 * Loads the current package and calls the passed callback when done
	 *
	 * @param {Function} callback Function to be run on completion
	 * @returns {Object} Returns the instance to allow chaining
	 **/
	Package.prototype.load = function(callback) {
		// Initialise variables
		var root = null,
			path = this.get('path'),
			url = null,
			script = new Script();
		
		// Only load if it is not already loaded
		// Otherwise, if it is loaded and there is a callback, just call the callback
		if(!Package.registeredPackages[path]) {
			// Get the root path. Either this.root, Package.defaultRoot or ''
			root = this.settings.root || Package.defaultRoot || '';
			
			// Remove any trailing slashes from the root
			root.replace(/\/$/, '');
			
			// Drop the root into the url and append it with the converted package path
			// Also add .js onto the end
			url = root + '/' + path.split('.').join('/') + '.js';
			
			// Now load the script
			script.setPath(url).load(function() {
				// If there is a callback, call it
				if(callback) {
					callback();
				}
			});
		}
		else if(Package.registeredPackages[path] && callback) {
			// Already loaded, call the callback
			callback();
		}
		
		// Return the instance to allow chaining
		return this;
	};
	
	/**
	 * Object for storing registered packages
	 **/
	Package.registeredPackages = {};
	
	// Expose the variables
	exports.Package = Package;
}(window));