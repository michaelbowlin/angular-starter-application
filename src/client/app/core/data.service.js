(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('staticService', function ($http, $q) {

            return {
                staticData: function (newUser) {

                    var persons = {
                        people: [
                            {
                                first : 'Kate Bridger',
                                img : 'user1.jpg',
                                blurb : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper leo. Integer placerat gravida nibh, sagittis porttitor elit porta eu. ',
                                friends: []
                            },
                            {
                                first : 'William Thompson',
                                img : 'user2.jpg',
                                blurb : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper leo. Integer placerat gravida nibh, sagittis porttitor elit porta eu. ',
                                friends: []
                            },
                            {
                                first : 'Marcus Milo',
                                img : 'user3.jpg',
                                blurb : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper leo. Integer placerat gravida nibh, sagittis porttitor elit porta eu. ',
                                friends: []
                            },
                            {
                                first : 'Grant Forester',
                                img : 'user4.jpg',
                                blurb : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper leo. Integer placerat gravida nibh, sagittis porttitor elit porta eu. ',
                                friends: []
                            },
                            {
                                first : 'Missy Kuhns',
                                img : 'user5.jpg',
                                blurb : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper leo. Integer placerat gravida nibh, sagittis porttitor elit porta eu. ',
                                friends: []
                            },
                            {
                                first : 'Gabe Madison',
                                img : 'user6.jpg',
                                blurb : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper leo. Integer placerat gravida nibh, sagittis porttitor elit porta eu. ',
                                friends: []
                            },
                            {
                                first : 'Harold Parker',
                                img : 'user7.jpg',
                                blurb : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper leo. Integer placerat gravida nibh, sagittis porttitor elit porta eu. ',
                                friends: []
                            },
                            {
                                first : 'Objectify Meow',
                                img : 'user3.jpg',
                                blurb : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper leo. Integer placerat gravida nibh, sagittis porttitor elit porta eu. ',
                                friends: []

                            }
                        ]
                    };

                    var dfd = $q.defer();
                    dfd.resolve(persons);

                    return dfd.promise;
                }
            };
        });
})();
