(function(){

	var app = Sammy.apps.body;

	app.get('#/', function(context){
		alert("You are in the main route.");
	});

})();