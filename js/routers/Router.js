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

		// recupero elemento da referenziare
		$('[data-id=books-list]').append(app.data.currentView.$el);

		// attivo il relativo elemento, lo mostro
		_activateBooksListPanel();

		// renderizzo la vista
		app.data.currentView.render();

		app.data.books.fetch({ reset: true });
	},

	book: function(id, bookId) {
		console.log("libro " + bookId + " per la categoria " + id);
	},

	unknown: function() {
		console.log("Route sconosciuta...");
	},

	_activateBooksListPanel: function() {
		$('[data-id=books-wrapper] .is-visible').removeClass('is-visible');
		$('[data-id=books-list]').addClass('is-visible');
	},

	_activateBookDetailPanel: function() {
		$('[data-id=books-wrapper] .is-visible').removeClass('is-visible');
		$('[data-id=book]').addClass('is-visible');
	}
});