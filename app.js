(function(){

	var app = Sammy('body');
	app.use(Sammy.Template);

	$(document).ready(function(){
		app.run('#/');
	});

	// $(document).ready(function(){
	// 	var app = Sammy('#container', function(){
	// 		this.use(Sammy.Template);

	// 		this.get('#/', function(context){
	// 			context.render('/view/main.template', {
	// 				'myVariable': 'Header',
	// 				'newVariable': 'new',
	// 			}, function(view){
	// 				$('#container').html(view);
	// 			});
	// 		});

	// 		this.get('#/page', function(context){
	// 			context.render('/view/page.template', {
	// 				'myVariable': 'Header2',
	// 			}, function(view){
	// 				$('#container').html(view);
	// 			});
	// 		});

	// 	});
	// 	app.run('#/');
	// });
	
})();