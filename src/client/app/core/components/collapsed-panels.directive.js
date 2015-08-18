(function() {
    'use strict';

    angular
        .module('app.core')
        .directive('collapsedPanels', collapsedPanels);

    function collapsedPanels() {
        return {
            restrict: 'E',
            templateUrl: 'app/core/components/collapsed-panels.html',
            controllerAs: 'vm',
            controller: collapsedPanelController
        };
    }

    /* @ngInject */
    function collapsedPanelController($scope) {

        var vm = this;
        vm.init = init;
        init();

        function init() {

        }

        /* Collapsed */
        $scope.collapse = function() {
            $scope.collapsed = !$scope.collapsed;
        };

    }

})();
