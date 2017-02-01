var util                  = require('util'),
    OpenStreetMapGeocoder = require('./openstreetmapgeocoder');

/**
 * Constructor
 */
var CustomNominatimGeocoder = function CustomNominatimGeocoder(httpAdapter, options) {
	this.options = ['host','port'];
	
    CustomNominatimGeocoder.super_.call(this, httpAdapter, options);

    if (!this.options.host || this.options.host == 'undefined') {
      throw new Error(this.constructor.name + ' needs an hostname');
    }

	this.fullHost = this.options.host + ":" + (this.options.port || 80);
	
	this._endpoint = 'http://'+this.fullHost+'/search';
	this._endpoint_reverse = 'http://'+_endpoint_reverse+'reverse';
};

util.inherits(CustomNominatimGeocoder, OpenStreetMapGeocoder);

// CustomNominatimGeocoder.prototype._endpoint = 'http://localhost:80/search';
// CustomNominatimGeocoder.prototype._endpoint_reverse = 'http://localhost:80/reverse';

module.exports = CustomNominatimGeocoder;