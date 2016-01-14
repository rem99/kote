define(function ( require ) {
	var Backbone = require('backbone');
	var template = _.template(require('tpl/cat.ejs'));

	var CatView = Backbone.View.extend({
		className: 'col-lg-2 col-md-3 col-sm-4',
		render: function () {
			var html = template(this.model.toJSON());
			this.$el.html(html);
			return this;
		}
	});

	return CatView;
});
