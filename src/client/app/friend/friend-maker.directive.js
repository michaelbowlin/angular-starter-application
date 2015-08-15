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
    function friendController() {

    }
})();
