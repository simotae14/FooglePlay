app.routers.Router = Backbone.Router.extend({
	routes: {
		'category/:id/book/:bookId': 'book',		// #category/<something>/book/<something>
		'category/:id': 'category',							// #category/<something>
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