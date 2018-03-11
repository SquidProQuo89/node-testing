const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;


describe('Server', () => {
	describe('Root', () => {
		it('should return hello world response', (done) => {
			request(app)
			.get('/')
			.expect(404)
			.expect((res) => {
				expect(res.body).toInclude({
					error: 'Page not found.',
				})
			})
			.end(done);
		});
	});
	describe('Users', () => {
		it('should return a user object', (done) => {
			// pass express application
			request(app)
			.get('/users')
			.expect(200)
			.expect((res) => {
				expect(res.body).toInclude(
				{
					name: 'Mr. Bojangles',
					age: 33
				});
			})
			.end(done);
		});
	});
});