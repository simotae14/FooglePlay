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

		this._cleanupCurrentView();

		// view per mostrare i dati recuperati
		app.data.currentView = new app.views.BooksList({
			collection: app.data.books
		});

		// recupero elemento da referenziare
		$('[data-id=books-list]').empty().append(app.data.currentView.$el);

		// attivo il relativo elemento, lo mostro
		this._activateBooksListPanel();

		// renderizzo la vista
		app.data.currentView.render();

		app.data.books.fetch({ reset: true });
	},

	book: function(id, bookId) {
		console.log("libro " + bookId + " per la categoria " + id);

		// Creo istanza della collection
		app.data.book = new app.models.Book({id: bookId});
		
		// pulisco area view
		this._cleanupCurrentView();

		// creo la vista associata
		app.data.currentView = new app.views.BookDetail({
			model: app.data.book
		});

		// attivo il pannello relativo al dettaglio
		this._activateBookDetailPanel();

		// appendo il contenuto creato all'ele di riferimento
		$('[data-id=book]').empty().append(app.data.currentView.$el);

		// recupero i dati
		app.data.book.fetch();
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
	},

	// utility per pulire la view
	_cleanupCurrentView: function() {
		if (app.data.currentView) {
			app.data.currentView.remove();
			app.data.currentView = null;
		}	
	}

});