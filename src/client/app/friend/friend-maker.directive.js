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
            var lsData, myObject, cat, fName, cat1, storedNames;

            lsData = localStorage.getItem('peoples');
            myObject = JSON.parse(lsData);
            cat1 = myObject.people[item]; //***
            cat = myObject.people[item];
            fName = cat.first;

            // loop through lsData
            //
            //for(var i = 0; myObject.length > i; i++){
            //    console.log('-----> ' + myObject[i]);
            //}
            // find a matching usr#

            // put cat array in LS
            catArray.push(fName);
            localStorage['catArray'] = JSON.stringify(catArray);
            storedNames = JSON.parse(localStorage['catArray']);

            if (storedNames.length >= 2) {

                //alert(fName);
                //refreshFriends(fName,lsData);
                //
                //var test = myObject.people;
                //test[item].friends.push(fName);
                //
                //delete test[item];
                //delete myObject.people[item];
                //var replacedItem = myObject.people[item];
                //replacedItem.push(cat1);
                //vm.personsData = test;
                //
                //
                //var pepArray = myObject.people.friends;
                //var newFriend = "storedNames[1]";
                //pepArray.push(newFriend);
                //
                //var test2 = vm.personsData.people;
                //var friendsAr = test2.friends;
                //console.log(friendsAr);
                //friendsAr.push(test2);



                //localStorage.setItem('peoples', JSON.stringify(test2));



                // splice complimentary object from LS

                // push friend into localstorage
                //cat1.friends.push(catArray[1]);
                //lsData.push(cat1)
                //var a = JSON.parse(localStorage.getItem('peoples'));
                //a.push(lsData);
                //localStorage.setItem('peoples', JSON.stringify(lsData));

                refreshFriends(fName,myObject,cat1,item);

                localStorage.removeItem('catArray');

            }
        };

        function refreshFriends(fName, myObject, cat1, item){

            //myObject.push(people);
            //delete myObject.people[item];
            myObject.people.friends.push(fName);

            console.log(newObj);
            m.personsData = newOne;
        }
    }

})();
