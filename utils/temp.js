const utils = require('./utils');

// Boots an instance of mocha, takes two arguments
// examples of running tests without expect library
it('should add two numbers', () => {
	var result = utils.add(12,22);
	if (typeof result !== 'number') {
		throw new Error('Strings are not supported');
	}

});

it('should square a number', () => {
	var result = utils.square(22);
	if (typeof result !== 'number') {
		throw new Error('Strings are not supported');
	} else if (result !== 484) {
		throw new Error('output value incorrect');
	}
	

});