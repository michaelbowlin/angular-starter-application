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
                    // Masonry paint
                    masonry();

                });
        }

        function addUser(newUser) {
            var lsData = JSON.parse(localStorage.getItem('peoples')); //TODO: Don't refresh view... just push

            lsData.people.unshift(newUser);

            // Put the object back into storage
            localStorage.setItem('peoples', JSON.stringify(lsData));

            // Refresh the view with the local storage object
            vm.personsData = lsData;

            // Masonry repaint
            masonry();
            resetForm();
        }

        function resetForm() {
            $scope.personForm.$setPristine(); //TODO: Fix form reset

        }


        $scope.countCats = function(item){
            var lsData, myObject, cat, fName, cat1, storedNames;

            lsData = localStorage.getItem('peoples');
            console.log('retrievedObject: ', JSON.parse(lsData));
            myObject = JSON.parse(lsData);
            cat1 = myObject.people[item];
            cat = myObject.people[item];
            fName = cat.first;

            catArray.push(fName);
            localStorage['catArray'] = JSON.stringify(catArray);

            storedNames = JSON.parse(localStorage['catArray']);

            if(storedNames.length >= 2){
                //cat1.push(catArray[1]);
                localStorage.removeItem('catArray')

            } else {

            }

        };

        function masonry() { //FIXME: Masonry not refreshing on new paint
            // TODO: Put Masonry into the Bower build
            // Load is used to ensure all images have been loaded, impossible with document
            jQuery(window).load(function () {
                setTimeout(function(){
                    // Takes the gutter width from the bottom margin of .post
                    var gutter = parseInt(jQuery('.post').css('marginBottom'));
                    var container = jQuery('#posts');

                    // Creates an instance of Masonry on #posts
                    container.masonry({
                        gutter: gutter,
                        itemSelector: '.post',
                        columnWidth: '.post'
                    });

                    // This code fires every time a user resizes the screen and only affects .post elements
                    // whose parent class isn't .container. Triggers resize first so nothing looks weird.
                    jQuery(window).bind('resize', function () {
                        if (!jQuery('#posts').parent().hasClass('container')) {
                            // Resets all widths to 'auto' to sterilize calculations
                            var post_width = jQuery('.post').width() + gutter;
                            jQuery('#posts, body > #grid').css('width', 'auto');
                            // Calculates how many .post elements will actually fit per row.
                            var posts_per_row = jQuery('#posts').innerWidth() / post_width;
                            var floor_posts_width = (Math.floor(posts_per_row) * post_width) - gutter;
                            var ceil_posts_width = (Math.ceil(posts_per_row) * post_width) - gutter;
                            var posts_width =
                              (ceil_posts_width >
                                  jQuery('#posts').innerWidth()) ? floor_posts_width : ceil_posts_width;
                            if (posts_width == jQuery('.post').width()) {
                                posts_width = '100%';
                            }
                            // Ensures that all top-level elements have equal width and stay centered
                            jQuery('#posts, #grid').css('width', posts_width);
                            jQuery('#grid').css({'margin': '0 auto'});
                        }

                    }).trigger('resize');
                },1000);
            });
        }
    }

})();
