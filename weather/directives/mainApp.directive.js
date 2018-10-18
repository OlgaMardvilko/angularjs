'use strict';

angular.module('weather')
.directive('mainApp', function() {
    return {
        restrict: 'E',
        transclude: true,
        link: function($scope, element, attr) {
            console.log(element);
            console.log(attr);
        },
        templateUrl: 'weather/templates/main-app.template.html'
    };
})