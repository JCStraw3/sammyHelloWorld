(function(){

	var app = Sammy.apps.body;

	app.get('#/profile', function(context){

		context.render('/view/header.template', {
			'header': 'Header',
		}, function(view){
			$('#header').html(view);
		});

		context.render('/view/profile.template', {
			'userName': 'Jessica',
			'email': 'test@test.com',
			'DOB': '08/27/89',
			'gender': 'female',
		}, function(view){
			$('#body').html(view);
		});
		
	});

})();