(function() {
var app = angular.module("madlibApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/madlibinput", {
		templateUrl: "views/madlib-input.html",
		controller: "inputController"
	});

	$routeProvider.when("/madlibdisplay", {
		templateUrl: "views/madlib-display.html",
		controller: "displayController"
	});

	$routeProvider.otherwise({
		template: "Please select the input link above to get started."
	});	
});

})();
