(function(){

	var app = Sammy.apps.body;

	app.get('#/', function(context){
		context.render('/view/main.template', {
			'myVariable': 'A header',
			'newVariable': 'new',
		}, function(view){
			$('#container').append(view);
		});
	});

})();