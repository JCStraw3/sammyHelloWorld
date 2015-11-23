(function(){

	var app = Sammy('body');
	app.use(Sammy.Template);

	$(document).ready(function(){
		app.run('#/');
	});

	// $(document).ready(function(){
	// 	var app = Sammy('#container', function(){
	// 		this.get('#/', function(context){
	// 			alert(context.verb);
	// 		});
	// 		this.get('#/page', function(context){
	// 			alert('test');
	// 		});
	// 	});
	// 	app.run('#/');
	// });
	
})();