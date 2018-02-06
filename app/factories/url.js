;(function () {
    'use strict';
    angular
        .module('factory.url', [])
        .factory('url', url);


    url.$inject = [];

    function url() {
       let baseUrl = 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/';
        /*  let baseUrl = 'https://anton1gritsenko.github.io/weather-app/';*/
        return {
            baseUrl: baseUrl
        };
    }

})();
