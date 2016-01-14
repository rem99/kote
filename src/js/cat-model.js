define(function ( require ) {
	var Backbone = require('backbone');

	var CatModel = Backbone.Model.extend({
		defaults: {
			name: null,
			url: null
		}
	});
	return CatModel;
});
