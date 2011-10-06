// Initialisation
var src = require('fs').readFileSync(process.argv[2], 'utf8'),
	sys = require('sys'),
	jshint = require('./jshint').JSHINT,
	i = null,
	e = null,
	result = jshint(src, {
		asi: false,
		bitwise: true,
		boss: false,
		browser: true,
		couch: true,
		curly: true,
		debug: true,
		devel: true,
		dojo: true,
		eqeqeq: true,
		eqnull: false,
		es5: true,
		evil: true,
		expr: true,
		forin: true,
		globalstrict: true,
		immed: true,
		iterator: true,
		jquery: true,
		lastsemic: false,
		latedef: true,
		laxbreak: true,
		loopfunc: true,
		mootools: true,
		newcap: true,
		noarg: true,
		node: true,
		noempty: true,
		nonew: true,
		nonstandard: true,
		nomen: true,
		onevar: true,
		onecase: true,
		passfail: false,
		plusplus: true,
		proto: true,
		prototypejs: true,
		regexdash: true,
		regexp: true,
		rhino: true,
		undef: true,
		scripturl: true,
		shadow: true,
		strict: false,
		sub: true,
		supernew: false,
		trailing: true,
		validthis: true,
		white: false,
		wsh: true
	});

// Check for errors
if(!result) {
	sys.puts('');
	
	// It's the end of the world!
	for(i = 0; i < jshint.errors.length; i++) {
		// Log the error
		e = jshint.errors[i];
		sys.puts('[' + e.line + ':' + e.character + '] ' + e.id + ' ' + e.reason + "\n\n\t" + e.evidence + "\n");
	}
}