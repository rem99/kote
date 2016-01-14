define(function (require) {
	require('jquery');
	require('underscore');
	require('backbone');
	var CatsCollection = require('js/cats-collection');
	var CatsView = require('js/cat-view');
	var cats = new CatsCollection();

	cats.fetch().done(function () {
		cats.each(function (cat) {
			var catView = new CatsView({ model: cat });
			catView.render().$el.appendTo('.gallery');
		});
	});
});
