'use strict';

angular.module('weather')
.directive('weatherList', function($rootScope) {
    return {
        restrict: 'E',
        tranclude: true,
        scope: {
            sitiesList: '=sitiesList',
            addCity: '=',
            remove: '&'
        },
        link: function($scope, element, attr) {
            console.log(element);
            console.log(attr);
            var cancelAddWatherList = $rootScope.$on('addWatherList', function(event, data){
                $scope.addCity(data);
            })
            $scope.$on('$destroy', cancelAddWatherList);
            // $scope.remove = function(array, index){
            //     array.splice(index, 1);
            // }
        },
        templateUrl: 'weather/templates/weather-list.template.html'
    };
})