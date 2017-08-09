(function() {
var app = angular.module("madlibApp");

app.controller("displayController", function($scope, madlibService) {
	$scope.madlibsArr = madlibService.getMadlibs();
});

})();