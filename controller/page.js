(function(){

	var app = Sammy.apps.body;

	app.get('#/page', function(context){
		context.render('/view/page.template', {
			'myVariable': 'A new header',
		}, function(view){
			$('#container').html(view);
		});
	});

})();