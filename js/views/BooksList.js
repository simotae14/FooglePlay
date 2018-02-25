app.views.BooksList = Backbone.View.extend({
	initialize: function(options) {
		this.options = options;
		this.listenTo(this.collection, "change reset", this.render);
	},
	render: function() {
		console.log('BooksList:render');
		this.$el.html('<ul></ul>');
		// creo elemento relativo a ul dentro la view
		var ulEl = this.$('ul');

		var bookPath = "#category/" + this.collection.catId + "/book/";
		
		// CICLO LA COLLEZIONE DI LIBRI
		this.collection.each(function(model) {
			ulEl.append(
				'<li class="thumb">' +
					'<a class="thumb-link" href="' + bookPath + model.get("id") + '">' +
						'<span class="overlay"></span>' +
						'<img src="' + model.get('volumeInfo').imageLinks.thumbnail + '">' +
					'</a>' +
				'</li>'
			);
		});

		return this;
	}
});
