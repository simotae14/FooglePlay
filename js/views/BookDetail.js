app.views.BookDetail = Backbone.View.extend({
	template: _.template($('script[data-id=book-detail-view]').html()),
	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},
	render: function() {
		var info = this.model.get('volumeInfo');
		var images = info.imageLinks;

		this.$el.html(this.template({
			info: info,
			images: images
		}));

		return this;
	}
});
