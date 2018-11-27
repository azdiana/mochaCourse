function getData() {
	// return ["#dddddd", "#ff5512", "#75d709"];
	return "hello";
}

module.exports = function getPalette() {
	var palette = getData();

	if(!Array.isArray(palette)) {
		throw new Error("Palette is not an array");
	}
	return palette;
}