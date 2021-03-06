// Force words to ProperCase
export const toProperCase = (str) => {
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// Extract query string params and decode
export const getQueryParams = (qs) => {
	qs = qs.split('+').join(' ');

	var params = {},
		tokens,
		re = /[?&]?([^=]+)=([^&]*)/g;

	return {};
}
