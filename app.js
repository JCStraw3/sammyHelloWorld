(function(){

	// var app = Sammy('body');
	// app.use(Sammy.Template);

	// $(document).ready(function(){
	// 	app.run('#/');
	// });

	$(document).ready(function(){
		var app = Sammy('#container', function(){
			this.use(Sammy.Template);
			this.get('#/', function(context){
				context.render('/view/main.template', {
					'myVariable': 'A header',
					'newVariable': 'new',
				}, function(view){
					$('#container').append(view);
				});
			});
			this.get('#/page', function(context){
				console.log('test');
			});
		});
		app.run('#/');
	});
	
})();