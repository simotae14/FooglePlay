app.models.Books = Backbone.Collection.extend({
	initialize: function(models, options) {
		// salvo le opzioni in una var locale
		this.options = options;
		// salvo categoria libro
		this.catId = this.options.catId;
	},
	url: function(id) {
		return 'api/books_' + this.options.catId + '.json';
	}
});