# About

Structure.js is a script to add class and package support to the browser. This allows you to create modular, reusable code in the browser, which is great for larger projects.

It is built so that if a specified class is required and not currently loaded then it will attempt to load it. You can also load the specified classes when you require them.

The classes must have a directory structure that matches their package string. So a class with a package string of `graphics.canvas.Image` would be stored in `graphics/canvas/Image.js`.

If load times are a priority then you can just put all of your classes in one file.

# Author

Written by [Oliver Caldwell](http://olivercaldwell.co.uk/).