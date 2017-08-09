(function() {
var app = angular.module("madlibApp");

app.factory("madlibService", function() {
    var madlibsArr = [];

    return {
        setMadlibs: function(newArr) {
            madlibsArr = newArr;
        },
        getMadlibs: function() {
            return madlibsArr;
        }
    };
});
})();
