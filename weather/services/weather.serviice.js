'use strict';

// angular.module('weather')
// .factory('weatherService', function($http) {
//     // var url = 'weather/data/cities.json';
//     return {
//         getWeather: function(url) {
//             return  $http.get(url) 
//         }
//     }
// });

angular.module('weather')
.factory('weatherService', function($http, $q) {

    function getWeather (url) {
        var deferred = $q.defer();
        $http.get(url).then(function(data) {
            console.log(data);
            deferred.resolve(data);
        }).then(function(){
            deferred.reject();
        });
        return deferred.promise;
    }

    return {
        getWeather: getWeather
    } 
});