var getPalette = require("../lib/getPalette");
var assert = require("assert");
describe("getPalette", function(){
	it("should throw an error if the result is not in array", function() {
		assert.throws(getPalette,/is not an array/);
	});
	
	it("should return an array with 3 files", function() {
		var palette = getPalette();
		assert(Array.isArray(palette), "did not return an array");
		assert.equal(palette.length, 3, "did not return 3 items");
	});
});