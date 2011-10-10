# About

Structure.js is a script to add class and package support to the browser. This allows you to create modular, reusable code in the browser, which is great for larger projects.

It is built so that if a specified class is required and not currently loaded then it will attempt to load it. You can also load the specified classes when you require them.

The classes must have a directory structure that matches their package string. So a class with a package string of `graphics.canvas.Image` would be stored in `graphics/canvas/Image.js`.

If load times are a priority then you can just put all of your classes in one file.

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