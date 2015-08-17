(function() {
    'use strict';

    angular
        .module('app.home')
        .directive('home', home);

    function home() {
        return {
            restrict: 'E',
            templateUrl: 'app/home/home.html',
            controllerAs: 'vm',
            controller: homeController
        };
    }

    /* @ngInject */
    function homeController(staticService) {

        var vm = this;
        vm.init = init;
        init();

        function init() {
            vm.preview = preview;
            preview();
        }

        function preview(data) {
            staticService.staticData(data)
                .then(function(data) {
                    vm.personsData = data;
                });
        }

    }
})();
