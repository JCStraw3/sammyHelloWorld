(function(){

	var app = Sammy.apps.body;

	app.get('#/page', function(context){

		context.render('/view/header.template', {
			'header': 'Header',
		}, function(view){
			$('#header').html(view);
		});

		context.render('/view/page.template', {
		}, function(view){
			$('#body').html(view);
		});
		
	});

})();