(function() {
    'use strict';

    angular
        .module('app.home')
        .directive('home', home);

    function home() {
        return {
            restrict: 'E',
            templateUrl: 'app/home/home.html',
            //controllerAs: 'vm',
            controller: homeController
        };
    }

    /* @ngInject */
    function homeController($scope) {

    }
})();
