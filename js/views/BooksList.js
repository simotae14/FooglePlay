app.views.BooksList = Backbone.View.extend({
	initialize: function(options) {
		this.options = options;
		this.listenTo(this.collection, "change reset", this.render);
	},
	render: function() {
		console.log('BooksList:render');
		this.$el.html('<h1>Elenco Libri</h1>');
		return this;
	}
});
