define(function ( require ) {
	var Backbone = require('backbone');
	var CatModel = require('js/cat-model');

	var CatsCollection = Backbone.Collection.extend({
		url: 'data.json',
		model: CatModel
	});
	return CatsCollection;
});
