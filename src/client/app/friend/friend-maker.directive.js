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
        var userArray = [];
        var firstClicked;

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
            var lsData, myObject, cat, storedNames, name1, name2;

            lsData = localStorage.getItem('peoples');

            myObject = JSON.parse(lsData);
            cat = myObject.people[item];

            // put cat array in sessionStorage
            userArray.push(cat);
            //sessionStorage['userArray'] = JSON.stringify(userArray);
            sessionStorage.setItem('userArray', JSON.stringify(userArray));
            storedNames = JSON.parse(sessionStorage['userArray']);

            if(storedNames[0].first){
                name1 = storedNames[0].first;
            }

            if(storedNames.length == 2){
                name2 = storedNames[1].first;

                if(name1 === name2){
                    // delete entire key
                    sessionStorage.removeItem('userArray');
                    // rebuild key w/ only 1 name
                    sessionStorage.setItem('userArray', JSON.stringify(cat));
                } else if (name1 !== name2) {
                    //vm.personsData.people[firstClicked].friends.push(name2);
                    //vm.personsData.people[0].friends.push(name2);
                    firstClicked.friends.push(name2);
                }

                //alert(storedNames.length);
                if(storedNames.length >= 2){
                    // clear user array
                    userArray = [];
                    // delete entire key
                    sessionStorage.clear();
                }
            } else if(storedNames.length == 1){
                // store first clicked
                firstClicked = vm.personsData.people[item];
            }



            //localStorage.setItem('userArray', JSON.stringify(cat));



                // ------------------


                // if 2



                    // push into 1

                // -----------------

                // if >= 2

                    // reset





            //$scope.countCats = function(item) {
            //    var lsData, myObject, cat, storedNames;
            //
            //    lsData = localStorage.getItem('peoples');
            //    myObject = JSON.parse(lsData);
            //    cat = myObject.people[item];
            //
            //    // put cat array in LocalStorage
            //    catArray.push(cat);
            //    localStorage['catArray'] = JSON.stringify(catArray);
            //    storedNames = JSON.parse(localStorage['catArray']);
            //
            //    if (storedNames.length == 2) {
            //
            //        vm.personsData.people[item].friends.push(cat.first);
            //
            //        localStorage.removeItem('catArray');
            //
            //    } else if (storedNames.length > 2) {
            //
            //        var item = vm.personsData.people[item];
            //        alert(item);
            //
            //    }
            //
            //};




        };
    }

})();
