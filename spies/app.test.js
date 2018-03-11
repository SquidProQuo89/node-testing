const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
// adds two methods
// app.__set__
// app.__get__

describe('App', () => {
	var db = {
		saveUser: expect.createSpy()
	};
	// swaps out the db variable from app.js with the db variable above
	app.__set__('db', db);
	it('should call the spy correctly', () => {
		var spy = expect.createSpy();
		spy('Andrew', 23);
		// checks to see if the spy has been called
		//expect(spy).toHaveBeenCalled();
		// checks to see if the spy has been called with specific properties
		expect(spy).toHaveBeenCalledWith('Andrew', 23);

	});
	it('should call saveUser with user object', () => {
		var email = 'loopzoop@gmail.com';
		var password = '123456';

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});
});