# About

Package.js is a script to add package support to the browser, as you may have guessed from the name. This allows you to create modular, reusable code in the browser, which is great for larger projects.

The packages must have a directory structure that matches their package string. So a package string of `graphics.canvas.Image` would be stored in `graphics/canvas/Image.js`.

# API

The following list is a list of methods available to instances of the Package class. You can create a new instance like so.

    var packageInstance = new Package();

The API is taken from the JSDoc comments which you can find inside the source file.

 * `Package(settings)` - Base package class
  * **param** {String|Object} settings This can either be the path string or a settings object to pass to the set method

 * `packageInstance.set(target, value)` - Sets a setting or settings depending on whether you pass a string or object
  * **param** {String|Object} target Either the name of the setting to set or an object of key value pairs to set
  * **param** {Mixed} value The value to set the target to if the target is a string
  * **returns** {Object} Returns the instance to allow chaining

 * `packageInstance.get(target)` - Retrieves a setting
  * **param** {String} target Name of the value to retrieve, such as `path`
  * **returns** {Mixed} The value of the target

 * `packageInstance.register()` - Registers the package in the global object, Package.registeredPackages. Requires the path to have been set
  * **returns** {Object} Returns the instance to allow chaining

 * `packageInstance.loadDependencies(callback)` - Loads all of the dependencies for a package
  * **param** {Function} callback Function to be run on completion
  * **returns** {Object} Returns the instance to allow chaining

 * `packageInstance.load(callback)` - Loads the current package and calls the passed callback when done
  * **param** {Function} callback Function to be run on completion
  * **returns** {Object} Returns the instance to allow chaining

# Author

Written by [Oliver Caldwell](http://olivercaldwell.co.uk/).

# Licence

Add class and package support to the browser
	
Copyright (C) 2011 Oliver Caldwell

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licences/gpl.html>.