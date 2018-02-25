$(function() {
	// creo il router
	app.data.router = new app.routers.Router();

	// creo view del topbar
	new app.views.TopBar({
		el: '[data-id=topbar]'
	});

	Backbone.history.start();
});


