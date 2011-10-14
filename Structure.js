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
	function Package(path) {
		// Store the path
		this.path = path;
	}
	
	// Expose the variables
	exports.Package = Package;
}(window || exports));