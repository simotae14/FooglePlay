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