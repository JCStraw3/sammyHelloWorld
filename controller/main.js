(function(){

	var app = Sammy.apps.body;

	app.get('#/', function(context){
		context.render('/view/main.template', {
			'myVariable': 'A different value'
		}, function(view){
			$('#container').append(view);
		});
	});

})();