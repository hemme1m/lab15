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
		redirectTo: "/madlibinput"
	});	

});

app.controller("inputController", function($scope, madlibService) {
	$scope.labels = ["Proper Name", "Location", "Adjective", "Animal", "Animals (Plural)",
	"Proper Name (new name)", "Verb"];
	$scope.values = new Array($scope.labels.size);

	$scope.madlibMaker = function() {
		$scope.madlibArray = [];
    	for (var i = 0; i < $scope.labels.length; i++) {
    		$scope.madlibArray.push({
    			label: $scope.labels[i],
    			value: $scope.values[i]
    		});
    	}
		madlibService.setMadlibs($scope.madlibArray);
	}
});

app.controller("displayController", function($scope, $location, madlibService) {
	$scope.madlibSender = function() {
		$scope.madlibOutput = new Array(madlibService.getMadlibs());
	}
});

})();
