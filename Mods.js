/**
 * @preserve Mods.js - Add class and package support to the browser
 * Copyright 2011, Oliver Caldwell (olivercaldwell.co.uk)
 **/

/**
 * Class - Can extend, implement and require other classes
 **/
function Class(settings) {
	// If settings have been passed initialise the class
	if(settings) {
		return this.initialise(settings);
	}
}

/**
 * Initialises the class
 *
 * @param {Object} settings The settings to set up your class with such as what class to extend
 * @returns {Function} The finished class
 **/
Class.prototype.initialise = function(settings) {
	// Initialise required variables
	var i = null;
	
	// Store the constructor
	this.built = settings.Constructor || new Function();
	
	// Implement the extendable class if one exists
	if(settings.Extends) {
		this.implement(settings.Extends.prototype);
	}
	
	// Implement any objects that need implementing
	if(settings.Implements) {
		// If it is an array we need to loop over them
		if(typeof settings.Implements === 'array') {
			for(i = 0; i < settings.Implements.length; i += 1) {
				// Implement the object
				this.implement(settings.Implements[i]);
			}
		}
		else {
			// Implement the object
			this.implement(settings.Implements);
		}
	}
	
	// Clean up the settings
	delete settings.Extends;
	delete settings.Implements;
	delete settings.Requires;
	
	// Implement the remaining methods
	this.implement(settings);
	
	// Return the built class
	return this.built;
};

/**
 * Wraps a child method in another function so it can call this.parent();
 *
 * @param {Function} parent Method to place in this.parent();
 * @param {Function} child The method to wrap inside the parent
 **/
Class.prototype.wrapMethod = function(parent, child) {
	return function() {
		// Initialise variables
		var self = this,
			response = null;
		
		// Set the parent
		self.parent = function() {
			return parent.apply(self, arguments);
		};
		
		// Run the child
		response = child.apply(self, arguments);
		
		// Delete the parent
		delete self.parent;
		
		// Return the response
		return response;
	};
};

/**
 * Implements an object into the class
 *
 * @param {Object} obj Object to implement into the class
 **/
Class.prototype.implement = function(obj) {
	// Initialise variables
	var key = null;
	
	// Loop over the methods implementing them
	for(key in obj) {
		if(obj.hasOwnProperty(key)) {
			// If it already exists and both are functions we need to wrap the method to allow this.parent();
			if(this.built.prototype[key] && typeof this.built.prototype[key] === 'function' && typeof obj[key] === 'function') {
				// It does exist, wrap it
				this.built.prototype[key] = this.wrapMethod(this.built.prototype[key], obj[key]);
			}
			else {
				// It does not exist yet, implement it
				this.built.prototype[key] = obj[key];
			}
		}
	}
};