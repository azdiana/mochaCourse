var fs = require("fs");

function getConfig() {
	//return ["#dddddd", "#ff5512", "#75d709"];
	return JSON.parse(fs.readFileSync(process.cwd() + "/config.json").toString());
}

module.exports = function () {
	var palette = getConfig().palette;

	if(!Array.isArray(palette)) {
		throw new Error("Palette is not an array");
	}
	return palette;
}