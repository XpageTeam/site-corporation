const color = require('css-color-converter');

module.exports = {
	darken(value, frac) {
		var darken = 1 - parseFloat(frac);
		var rgba = color(value).toRgbaArray();
		var r = rgba[0] * darken;
		var g = rgba[1] * darken;
		var b = rgba[2] * darken;
		return color([r,g,b]).toHexString();
	},
	lighten(value, frac) {
		var darken = 1 + parseFloat(frac);
		var rgba = color(value).toRgbaArray();
		var r = rgba[0] * darken;
		var g = rgba[1] * darken;
		var b = rgba[2] * darken;
		return color([r,g,b]).toHexString();
	},
	rgba(value, frac){
		if (arguments.length != 2)
			return "rgba("+arguments[0]+","+arguments[1]+","+arguments[2]+", "+arguments[3]+")"

		var rgba = color(value).toRgbaArray();
		var r = parseInt(rgba[0] * frac);
		var g = parseInt(rgba[1] * frac);
		var b = parseInt(rgba[2] * frac);

		return "rgba("+r+","+g+","+b+", "+frac+")"

		// return color([r,g,b]).toHexString();
	},

	persent(value, base){
		return (value / base * 100) + "%"
	},
	vw(value, base = 1903){
		return (value / base * 100) + "vw"
	},
	vh(value, base = 968){
		return (value / base * 100) + "vh"
	},
	lh(pxLh, pxFs){
		return (pxLh / pxFs).toFixed(2)
	},
	rem(value){
		return (value / 16) + "rem"
	}
};