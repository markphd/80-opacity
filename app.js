// load packages
var Color = require('color');
var argv = require('argv');
var rgbHex = require('rgb-hex');

var args = argv.option([
	{
		name: 'hex',
		short: 'c',
		type: 'string',
		description: 'Input HEX color value'
	},
	{
		name: 'opacity',
		short: 'o',
		type: 'number',
		description: 'Opacity percentage (e.g. 80, 70)'
	}
]).run();

// console.log(args.targets[0]);

// user input

// console.log(hex, "<= hex from arg");

// var opacity = .80;

// console.log(hexColor);

// formula: Alpha compositing 
// target = opacity * overlay + (1 - opacity) * background

var newColor = [];
var background = 255;
var opacity = args.options.opacity / 100;
var hex = '#' + args.options.hex;
var hexColor = Color(hex).array();
hexColor.map(function(a) {
	// console.log(a);
	// console.log(Math.round((opacity * a) + ((1 - opacity) * background)));
	newColor.push(Math.round(opacity * a + (1 - opacity) * background));
	// console.log(output);
	// newColor.push(output);
})
var output = rgbHex(newColor.toString());
console.log(output)

// argv.type( 'opacity', function(value) {
// 	value = new Number(value);
// 	return value / 100
// })

