/**
 * @preserve Package.js - Add package support to the browser
 * Copyright 2011, Oliver Caldwell (olivercaldwell.co.uk)
 *
 * Licenced under GPL v3 <http://www.gnu.org/licences/gpl.html>
 **/

(function(exports) {
	/**
	 * Base package class
	 *
	 * @param {String} path The packages path, for example `graphics.canvas.Image`
	 **/
	function Package(path) {
		// Check for a passed path
		if(path) {
			// Store the path
			this.setPath(path);
		}
	}
	
	/**
	 * Object for storing settings
	 **/
	Package.prototype.settings = {};
	
	/**
	 * Stores the class path
	 *
	 * @param {String} path The packages path, for example `graphics.canvas.Image`
	 **/
	Package.prototype.setPath = function(path) {
		this.settings.path = path;
	};
	
	/**
	 * Stores the root path
	 * If no root path is set it will look at the global `window.packageRoot`
	 *
	 * @param {String} root The base path to the class. Such as `.` or `./assets/javascript/packages`
	 **/
	Package.prototype.setRoot = function(root) {
		this.settings.root = root;
	};
	
	/**
	 * Sets a setting or settings depending on whether you pass a string or object
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
	};
	
	/**
	 * Loads the current package and calls the passed callback when done
	 *
	 * @param {Function} callback Function to be run on completion
	 **/
	Package.prototype.load = function(callback) {
		// Get the root path. Either this.root, window.packageRoot or ''
		var root = this.settings.root || window.packageRoot || '';
		
		// Remove any trailing slashes from the root
		root.replace(/\/$/, '');
	};
	
	// Expose the variables
	exports.Package = Package;
}(window));