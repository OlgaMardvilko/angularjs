'use strict';

angular.module('weather')
.constant('citiesConstants', {
    cities: [
        { 
            name: 'London', 
            url: 'http://forecast.io/forecast?q=51.505,-0.125&units=si' 
        },
        { 
            name: 'Minsk',
            url: 'http://forecast.io/forecast?q=53.9,27.56667&units=si' 
        },
        { 
            name: 'New York', 
            url: 'http://forecast.io/forecast?q=42.3601,-71.0589&units=si' 
        },
        { 
            name: 'Paris', 
            url: 'http://forecast.io/forecast?q=48.864716,2.349014&units=si' 
        }
    ]
})