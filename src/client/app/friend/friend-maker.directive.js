(function() {
    'use strict';

    angular
        .module('app.friend')
        .directive('friendMaker', friendMaker);

    function friendMaker() {
        return {
            restrict: 'E',
            templateUrl: 'app/friend/friend-maker.html',
            controllerAs: 'vm',
            controller: friendController
        };
    }

    /* @ngInject */
    function friendController(staticService) {

        var vm = this;
        vm.init = init;
        vm.addUser = addUser;

        init();

        function init() {
            vm.network = network;
            network();
        }

        function network(data) {
            staticService.staticData(data)
                .then(function (data) {
                    vm.personsData = data;
                });
        }

        function addUser(newUser) {
            var newUsers = {};
            //var newUser.list = [];
            console.log(newUsers);
            newUsers.list.push({id: newUser.list.length, text: message});

        }




        //messages.add = function(message){
        //    messages.list.push({id: messages.list.length, text: message});
        //};
        //
        //return messages;

        //vm.addUser = function (newUser) {
        //    console.log(newUser);
        //}
    }

})();
