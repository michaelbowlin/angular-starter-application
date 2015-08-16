(function() {
    'use strict';

    angular
        .module('app.user')
        .directive('user', user);

    function user() {
        return {
            restrict: 'E',
            templateUrl: 'app/user/user.html',
            //controllerAs: 'vm',
            controller: userController
        };
    }

    /* @ngInject */
    function userController($scope) {

    }
})();
