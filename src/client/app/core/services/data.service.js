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

        /**
         * Static data for POC purposes.
         *
         *
         */
        function staticData($scope) {

            console.log('Data Service!');
            $scope.user1 = {
                name: 'Luke Skywalker',
                address: {
                    street: 'PO Box 1234',
                    city: 'Denver',
                    state: 'Colorado'
                },
                friends: ['Kepler', 'Chatka', 'Kaiser']
            };
            $scope.user2 = {
                name: 'Luke Bowlin',
                address: {
                    street: 'PO Box 1234',
                    city: 'Denver',
                    state: 'Colorado'
                },
                friends: ['Kepler', 'Chatka', 'Kaiser']
            };

        }

    }

})();
