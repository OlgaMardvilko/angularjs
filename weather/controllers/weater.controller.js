'use strict';

angular.module('weather')
.controller('ctrl', function($scope, citiesConstants, weatherService) {
    $scope.cities = citiesConstants.cities;
    $scope.citiesItem = $scope.cities[0].name;
    $scope.sitiesList = [];
    $scope.test='test';

    $scope.addCity = function(city) {
        $scope.cities.forEach(item => {
            if(item.name === city) {
                if($scope.sitiesList.indexOf(item) < 0 ){
                    weatherService.getWeather(item.url).then(function(data){
                        console.log(data.data);
                        item.temperature = data.data.currently.temperature;
                        item.icon = data.data.currently.icon;
                        $scope.sitiesList.push(item);
                    });
                }
            }
        });
    };
    $scope.remove = function(index){
        $scope.sitiesList.splice(index, 1);
    }

});