/**
 * @preserve Structure.js - Add class and package support to the browser
 * Copyright 2011, Oliver Caldwell (olivercaldwell.co.uk)
 *
 * Licenced under GPL v3 <http://www.gnu.org/licences/gpl.html>
 **/

(function(exports) {
	/**
	 * Used to create classes
	 **/
	function ClassFactory(options) {
		// If options where passed implement them
		if(options) {
			this.options = options;
			this.implement(this.options);
		}
	}
	
	/**
	 * 
	 **/
	ClassFactory.prototype.implement = function(options) {
		
	};
	
	/**
	 * Class - Can extend, implement and require other classes
	 *
	 * @param {Object} options The settings to initialise the class with
	 **/
	function Class(options) {
		
	}
	
	// Expose the variables
	exports.Class = Class;
}(window || exports));