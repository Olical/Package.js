/**
 * @preserve Mods.js - Add class and package support to the browser
 * Copyright 2011, Oliver Caldwell (olivercaldwell.co.uk)
 **/

/**
 * Class - Can extend, implement and require other classes
 **/
function Class(settings) {
	// Initialise variables
	var built = settings.Constructor || new Function(),
		key = null;
	
	// Clean up the settings
	delete settings.Extends;
	delete settings.Implements;
	delete settings.Requires;
	delete settings.Constructor;
	
	// Implement the remaining methods
	for(key in settings) {
		if(settings.hasOwnProperty(key)) {
			built.prototype[key] = settings[key];
		}
	}
	
	// Return the built class
	return built;
}