module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.setName = (user, fullName) => {
	var names = fullName.split(' ');
	user.firstName = names[0];
	user.lastName = names[1];
	return user;
};

// mocha will assume that things taking longer than 2 seconds isn't good
module.exports.asyncAdd = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 1000);
};

// mocha will assume that things taking longer than 2 seconds isn't good
module.exports.asyncSquare = (a, callback) => {
	setTimeout(() => {
		callback(a*a);
	}, 1000);
};