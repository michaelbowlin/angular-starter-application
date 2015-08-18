(function(){
    'use strict';

    angular
        .module('app.core')
        .directive('friendButton', friendButton);

    function friendButton(){
        return {
            restrict: 'E',
            templateUrl: 'app/core/components/friend-button.html',
            controllerAs: 'vm',
            scope: {
                user: '='
            },
            controller: friendButtonController
        }
    }

    /* @ngInject */
    function friendButtonController($scope) {

        var vm = this;
        vm.init = init;
        vm.countCats = countCats;
        var catCount = 0;
        init();

        function init(){
            //alert('asdf');
        }

        $scope.goCats = false;


    }

})();
