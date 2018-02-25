app.views.TopBar = Backbone.View.extend({
	events: {
		'click [data-id=category-toggle]': 'toggleCategories',
		'click [data-id=category]': 'selectCategory'
	},
	toggleCategories: function(event) {
		event.preventDefault();
		// recupero il wrapper del panel con le voci
		this.$('[data-id=categories-panel]').toggleClass('is-visible');
	},
	selectCategory: function(event) {
		this.$('[data-id=categories-panel]').removeClass('is-visible');		
	}
});