import "babel-polyfill";
import "webcomponents.js/webcomponents-lite";
import Component from '../dist/index';
import { expect } from 'chai'
import testingStack from 'coffeekraken-testing-stack';
const html = require('./fixture.html');

// preparing mocha
testingStack.mocha.injectHTML(html);
testingStack.mocha.run();

// tests
describe('component', () => {
	// let component;
	// before((done) => {
	// 	// grab the component
	// 	component = document.querySelector('s-google-map');
	// 	setTimeout(done,1000);
	// });
	// afterEach(() => {
	// 	component.onComponentDidUpdate = null;
	// });
	it('Is ok cause no tests have actually been written for now...', () => {
		expect(true).to.equal(true);
	});
});
