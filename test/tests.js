// descrive che cosa sto testando
describe("models/Book", function() {
	// When
	describe("When building a new model", function() {
		// Then
		it("it builds the REST endpoint URL using the ID property", function() {
			var book = new app.models.Book({ id: 'ID' });
			// la URL dovrebbe essere: api/book_ID.json
			expect(book.url()).to.equal('api/book_ID.json');
		});
	});
});

// testo la collection Libri
describe("models/Books", function() {
	it("it builds the REST endpoint with the categoryId passed in the constructor option 'catId'", function() {
		var books = new app.models.Books(null, { catId: "categoryId" });
		expect(books.url()).to.equal('api/books_categoryId.json');
	});
});

// testo la view del Dettaglio Libro
describe("views/BookDetail", function() {
	// testo l'inizializzazione
	describe("When initializing", function() {
		it("It re-renders when the model changes", function() {
			// creo istanza del model
			var model = new app.models.Book({id: "id1"});
			// verifico che il render venga chiamato
			// creo lo stub di render
			var render = sinon.stub(app.views.BookDetail.prototype, "render");
			// creo ora la nostra view passandogli i parametri
			var view = new app.views.BookDetail({
				model: model
			});

			// controllo se cambiando qualsiasi ptu nel model
			model.set("property", "value");

			// ora se chiamo il render chaimo lo stub e usando questo so se viene chiamato
			// o meno
			expect(render.called).to.be.true;

			// riporto il render al suo valore originale
			app.views.BookDetail.prototype.render.restore();
		});
	});

	// testo quando viene renderizzata la view
	describe("When rendering", function() {

	});
});