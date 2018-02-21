app.routers.Router = Backbone.Router.extend({
	routers: {
		'category/:id/book/:bookId': 'book',		
		'category/:id': 'category',
		'': 'home',
		'*default': 'unknown'
	},
	home: function() {
		console.log("Home");
	},

	category: function(id) {
		console.log("categoria " + id);
	},

	book: function(id, bookId) {
		console.log("libro " + bookId + " per la categoria " + id);
	},

	unknown: function() {
		console.log("Route sconosciuta...");
	}
});