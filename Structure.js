/**
 * @preserve Structure.js - Add package support to the browser
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
	function Package(path, callback) {
		// Check for a passed path
		if(path) {
			// Store the path
			this.storePath(path);
			
			// If there is also a callback, load the package
			if(callback) {
				this.load();
			}
		}
	}
	
	/**
	 * Stores the class path
	 *
	 * @param {String} path The packages path, for example `graphics.canvas.Image`
	 **/
	Package.prototype.setPath = function(path) {
		this.path = path;
	};
	
	/**
	 * Loads the current package and calls the passed callback when done
	 *
	 * @param {Function} callback Function to be run on completion
	 **/
	Package.prototype.load = function(callback) {
		
	};
	
	// Expose the variables
	exports.Package = Package;
}(window || exports));