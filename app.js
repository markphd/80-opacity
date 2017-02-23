// load packages
var Color = require('color');
var argv = require('minimist')(process.argv.slice(2));
var rgbHex = require('rgb-hex');

// user input
var hex = argv._.toString();
// var opacity = argv.o / 100;
var opacity = .80;
var hexColor = Color('#' + hex).array();
console.log(hexColor);

// formula: Alpha compositing 
// target = opacity * overlay + (1 - opacity) * background

var background = 255;

function colorize() {
	var newColor = [];
	hexColor.map(function(a) {
		// console.log(a);
		console.log(Math.round((opacity * a) + ((1 - opacity) * background)));
		console.dir(Math.round(opacity * a + (1 - opacity) * background));		
		newColor.push(Math.round(opacity * a + (1 - opacity) * background));
		// console.log(output);
		// newColor.push(output);
	})
	var output = rgbHex(newColor.toString());
	console.log(output)
}

colorize()