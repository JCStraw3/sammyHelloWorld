(function(){

	var app = Sammy.apps.body;

	app.get('#/test', function(context){

		context.render('/view/header.template', {
			'header': 'Header',
		}, function(view){
			$('#header').html(view);
		});

		context.render('/view/test.template', {
		}, function(view){
			$('#body').html(view);
		});

	});

})();