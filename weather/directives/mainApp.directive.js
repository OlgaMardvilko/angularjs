'use strict';

angular.module('weather')
.directive('mainApp', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'weather/templates/main-app.template.html'
    };
})