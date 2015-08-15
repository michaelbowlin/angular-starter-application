(function() {
    'use strict';

    /**
     * dataService -
     *
     * A service that provides functionality for making HTTP calls to a backend service.
     */
    angular
        .module('app.core')
        .factory('dataService', dataService);

    /**
     * Internal function that returns a dataService factory function.
     * @param {object} staticData
     * @returns {Object} the angular factory function
     * @ngInject
     */
    function dataService() {
        var service = {
            staticData: staticData

        };

        return service;

        /////////////////////
        // service methods

        /**
         * Performs a GET request.
         * @param {String} url absolute or relative URL of the resource that is being requested
         * @param {Object=} headers map of strings or functions which return strings representing
         *        HTTP headers to send to the server. If the return value of a function is null,
         *        the header will not be sent. Functions accept a config object as an argument
         * @param {Function=} callback the callback function that should be called when the request
         *        completes to transform the data - should take the response data as a parameter
         *        and return the data that should be resolved by the promise
         * @param {(Boolean|Cache)=} cache if true, a default $http cache will be used to cache the
         *        GET request, otherwise if a cache instance built with $cacheFactory, this cache
         *        will be used for caching
         * @param {Object.<string|Object>=} params map of strings or objects which will be turned to
         *        ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
         *        JSONified
         * @param {Object=} config additional request configuration properties
         * @param {(Object|String)=} spinner the name of the spinner to active or an object containing
         *        a 'name' (string) and 'noStop' (boolean) field; if name is 'no-spinner' then the
         *        spinner will not activate; if noStop is true then the spinner will be started
         *        but not stopped
         * @returns {deferred.promise}
         */
        function staticData() {

            console.log('Data Service!');
        }

    }

})();
