define(require => {
	require('jquery');
	require('underscore');
	require('backbone');
	require('styles/main.less');
	require('libs/bootstrap/dist/css/bootstrap.min.css');
	require('libs/bootstrap/dist/css/bootstrap-theme.min.css');
	let CatsCollection = require('js/cats-collection');
	let CatsView = require('js/cat-view');
	let cats = new CatsCollection();

	cats.fetch().done(() => {
		cats.each(cat => {
			var catView = new CatsView({ model: cat });
			catView.render().$el.appendTo('.gallery');
		});
	});
});
