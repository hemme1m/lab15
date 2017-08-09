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

app.controller("inputController", function($scope, madlibService) {
	$scope.labels = ["Proper Name", "Location", "Adjective", "Animal", "Animals (Plural)",
	"Proper Name (new name)", "Verb"];
	$scope.values = [];

	$scope.madlibMaker = function() {
		$scope.madlibsArr = [];
    	for (var i = 0; i < $scope.labels.length; i++) {
    		$scope.madlibsArr.push({
    			label: $scope.labels[i],
    			value: $scope.values[i]
    		});
    	}
		madlibService.setMadlibs($scope.madlibsArr);
	}
});

app.controller("displayController", function($scope, madlibService) {
	$scope.madlibsArr = madlibService.getMadlibs();
});

})();
