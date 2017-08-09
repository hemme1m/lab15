(function() {
var app = angular.module("madlibApp");

app.factory("madlibService", function() {
    var madlibsArr = [];

    function setMadlibs(newArr) {
        madlibsArr = newArr;
    }

    function getMadlibs() {
        return madlibsArr;
    }

    return {
        setMadlibs: setMadlibs,
        getMadlibs: getMadlibs
    }
});
})();
