/**
 * @preserve Structure.js - Add class and package support to the browser
 * Copyright 2011, Oliver Caldwell (olivercaldwell.co.uk)
 *
 * Licenced under GPL v3 <http://www.gnu.org/licences/gpl.html>
 **/

(function(exports) {
	/**
	 * Class - Can extend, implement and require other classes
	 *
	 * @param {Object} options The settings to initialise the class with
	 **/
	function Class(options) {
		/**
		 * Wraps a function in a parent function
		 * Adds access to this.parent();
		 *
		 * @param {Function} wrap The child function to wrap
		 * @param {Function} with The parent function to wrap with
		 * @return {Function} The wrapped child with access to this.parent();
		 **/
		function wrapFunction(wrap, with) {
			
		}
		
		/**
		 * Implements methods into an object
		 *
		 * @param {Object} methods The methods to implement
		 * @param {Object} target The object to implement the methods into
		 **/
		function implementMethods(methods, target) {
			// Initialise variables
			var key = null;
			
			// Loop over the methods
			for(key in methods) {
				// Make sure it is not part of the prototype
				if(methods.hasOwnProperty(key)) {
					// If it is a function
					// And it already exists
					if(typeof methods[key] === 'function' && target[key]) {
						// Wrap it
						target[key] = wrapFunction(target[key], methods[key]);
					}
					else {
						// Otherwise implement it
						target[key] = methods[key];
					}
				}
			}
		}
		
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