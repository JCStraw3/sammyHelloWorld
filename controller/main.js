(function(){

	var app = Sammy.apps.body;

	app.get('#/', function(context){

		context.render('/view/header.template', {
			'header': 'Header',
		}, function(view){
			$('#header').html(view);
		});

		context.render('/view/main.template', {
			'myVariable': 'Header',
			'newVariable': 'new',
		}, function(view){
			$('#body').html(view);
		});
		
	});

})();