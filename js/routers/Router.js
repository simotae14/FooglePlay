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

		// Creo istanza della collection
		app.data.books = new app.models.Books(null, {catId: id});
		// loggo i valori recuperati da chiamata metodo url()
		console.log(app.data.books.url());

		// view per mostrare i dati recuperati
		app.data.currentView = new app.views.BooksList({
			collection: app.data.books
		});

		app.data.books.fetch();
	},

	book: function(id, bookId) {
		console.log("libro " + bookId + " per la categoria " + id);
	},

	unknown: function() {
		console.log("Route sconosciuta...");
	}
});