(function() {
    'use strict';

    angular
        .module('app.friend')
        .directive('friendInfoCard', friendInfoCard);

    function friendInfoCard() {
        return {
            restrict: 'E',
            templateUrl: 'app/friend/friendInfoCard.html',
            //controllerAs: 'vm',
            scope: {
                user: '='
            },
            controller: friendController
        };
    }

    /* @ngInject */
    function friendController($scope) {
        /* Initial Variables */
        $scope.collapsed = false;

        /* Knight Me */
        $scope.knightMe = function(user) {
            user.rank = "knight";
        }

        /* Collapsed */
        $scope.collapse = function(){
            $scope.collapsed = !$scope.collapsed
        }
    }

    //function friendController() {
    //
    //    var vm = this;
    //    vm.init = init;
    //
    //    function init() {
    //        vm.knightMe = knightMe;
    //        vm.collapse = collapse;
    //        vm.collapsed = false;
    //    }
    //
    //    /* Knight Me */
    //    var knightMe = function(user) {
    //        user.rank = "knight";
    //    }
    //
    //    /* Collapsed */
    //    var collapse = function(){
    //        vm.collapsed = !vm.collapsed
    //
    //    }
    //}

})();
