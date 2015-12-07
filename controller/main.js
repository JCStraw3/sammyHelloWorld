(function(){

	var app = Sammy.apps.body;

	app.get('#/', function(context){
		context.render('/view/main.template', {
			'myVariable': 'Header',
			'newVariable': 'new',
		}, function(view){
			$('#container').html(view);
		});
	});

})();