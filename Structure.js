/**
 * @preserve Structure.js - Add class and package support to the browser
 * Copyright 2011, Oliver Caldwell (olivercaldwell.co.uk)
 **/

(function(exports) {
	/**
	 * Class - Can extend, implement and require other classes
	 *
	 * @param {Object} options The settings to initialise the class with
	 **/
	function Class(options) {
		// Initialise the new class
		function built() {
			// If there is a constructor, call it
			if(options.Constructor) {
				options.Constructor.apply(this, arguments);
			}
		}
		
		// Return the finished class
		return built;
	}
	
	// Expose the variables
	exports.Class = Class;
}(window || exports));