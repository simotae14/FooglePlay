app.views.BooksList = Backbone.View.extend({
	initialize: function(options) {
		this.options = options
	},
	render: function() {
		console.log('BooksList:render');
		this.$el.html('<h1>Elenco Libri</h1>');
		return this;
	}
});

books.render();