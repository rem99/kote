define(function (require) {
	require('jquery');
	require('underscore');
	require('backbone');
	require('styles/main.less');
	require('libs/bootstrap/dist/css/bootstrap.min.css');
	require('libs/bootstrap/dist/css/bootstrap-theme.min.css');
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
