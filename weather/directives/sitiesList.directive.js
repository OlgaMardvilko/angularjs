'use strict';

var sitiesList = [];

angular.module('weather')
.directive('sitiesList', ['weatherService', function(weatherService) {
    return {
        restrict: 'E',
        tranclude: true,
        scope: {
            cities: '=cities',
            citiesItem: '=citiesItem',
        },

        link: function($scope) {
            $scope.emitEvent = function() {
                $scope.$emit('addWatherList', $scope.citiesItem);
            }
        },
        templateUrl: 'weather/templates/cities-list.template.html'
    };
}]);
