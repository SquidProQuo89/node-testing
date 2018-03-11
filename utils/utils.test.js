const utils = require('./utils');
const expect = require('expect') 


// creates a 'utils' labeled block under test-watch output
describe('Utils', () => {
	// can nest descriptions for test-watch output
	describe('#add', () => {
		// need to specify done argument to let mocha know the
		// test is asynchronous and won't pass automagically
		it('should async add two numbers', (done) => {
			utils.asyncAdd(4,3, (sum) => {
				expect(sum).toBe(7).toBeA('number')
				done();
			});
		});		
	})

	it('should async square two numbers', (done) => {
		utils.asyncSquare(12, (sum) => {
			expect(sum).toBe(144).toBeA('number')
			done();
		});
	});

});

// Boots an instance of mocha, takes two arguments
// examples of testing with expect library
it('should add two numbers', () => {
	var result = utils.add(12,22);
	expect(result).toBeA('number')
	expect(result).toBe(34);

});

it('should square a number', () => {
	var result = utils.square(22);
	expect(result).toBeA('number');
	expect(result).toBe(484);

});

it('should expect some values', () => {
	// expect(12).toNotBe(13);
	// will throw errors when evaluating objects
	// expect({name:'Andrew'}).toBe({name: 'Andrew'});

	// will work with objects and arrays
	// can also use .toNotEqual for opposite effect
	// expect({name:'Andrew'}).toEqual({name: 'Andrew'});

	// can check to see if an object or array includes certain properties
	// can also use .toExclude for opposite effect
	expect([2,3,4]).toInclude(2);
});





it('should include firstName and lastName with proper values', () => {
	var user = {
		location: 'Singapore',
		age: 25
	};
	
	var res = utils.setName(user, 'Taylor Parrish');
	
	expect(res).toInclude({
		firstName: 'Taylor',
		lastName: 'Parrish'
	});
});


// it('should expect some values', () => {
// 	expect({
// 		name: "Taylor",
// 		age: 28,
// 		location: "Singapore"
// 	}).toInclude({
// 		age: 28
// 	})
// });

