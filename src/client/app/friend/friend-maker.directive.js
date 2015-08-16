(function() {
    'use strict';

    angular
        .module('app.friend')
        .directive('friendMaker', friendMaker);

    function friendMaker() {
        return {
            restrict: 'E',
            templateUrl: 'app/friend/friend-maker.html',
            //controllerAs: 'vm',
            controller: friendController
        };
    }

    /* @ngInject */
    function friendController($scope) {

        $scope.user1 = {
            name: 'Luke Skywalker',
            address: {
                street: 'PO Box 1234',
                city: 'Denver',
                state: 'Colorado'
            },
            friends: ['Kepler','Chatka','Kaiser']
        }
        $scope.user2 = {
            name: 'Luke Bowlin',
            address: {
                street: 'PO Box 1234',
                city: 'Denver',
                state: 'Colorado'
            },
            friends: ['Kepler','Chatka','Kaiser']
        }


    }
})();
