(function() {
var app = angular.module("madlibApp");

app.controller("inputController", function($scope, $location, madlibService) {
	$scope.labels = ["Proper Name", "Location", "Adjective", "Animal", "Animals (Plural)",
	"Proper Name (new name)", "Verb"];
	$scope.values = [];
	$scope.madlibsArr = [];

	$scope.madlibMaker = function() {
    	for (var i = 0; i < $scope.labels.length; i++) {
    		$scope.madlibsArr.push({
    			label: $scope.labels[i],
    			value: $scope.values[i]
    		});
    	}
		madlibService.setMadlibs($scope.madlibsArr);
		$location.path('/madlibdisplay');
	}
});

})();