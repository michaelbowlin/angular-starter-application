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
    function friendController(staticService, $scope) {

        var vm = this;
        vm.init = init;
        vm.addUser = addUser;
        vm.resetForm = resetForm;
        var catArray = [];

        init();

        function init() {
            vm.network = network;
            network();
        }

        function network(data) {
            staticService.staticData(data)
                .then(function (data) {

                    // Put the object into storage
                    localStorage.setItem('peoples', JSON.stringify(data));

                    // First pull the data from the service
                    vm.personsData = data;

                });
        }

        function addUser(newUser) {
            var lsData = JSON.parse(localStorage.getItem('peoples')); //TODO: Don't refresh view... just push

            lsData.people.unshift(newUser);

            // Put the object back into storage
            localStorage.setItem('peoples', JSON.stringify(lsData));

            // Refresh the view with the local storage object
            vm.personsData = lsData;

            resetForm();
        }

        function resetForm() {
            $scope.personForm.$setPristine(); //TODO: Fix form reset
        }

        $scope.countCats = function(item) {
            var lsData, myObject, cat, fName, cat1, storedNames, lsFriend;

            lsData = localStorage.getItem('peoples');
            myObject = JSON.parse(lsData);
            cat1 = myObject.people[item];
            cat = myObject.people[item];
            //fName = cat.first;


            // put cat array in LS
            //catArray.push(fName);
            catArray.push(cat);
            localStorage['catArray'] = JSON.stringify(catArray);
            storedNames = JSON.parse(localStorage['catArray']);

            if (storedNames.length >= 2) {

                //console.log(fName);



                vm.personsData.people[0].friends.push(cat.first);

                myObject.people.friends(fName);

                localStorage.removeItem('catArray');

            }
        };
    }

})();
