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
                                first : 'Dr. Repeater',
                                img : 'cat2.jpg',
                                blurb : 'I like mice, yarn and boxes.',
                                friends: []
                            },
                            {
                                first : 'The Infamous Loop',
                                img : 'cat3.jpg',
                                blurb : 'I like mice, yarn and boxes.',
                                friends: []
                            },
                            {
                                first : 'RePurrsion',
                                img : 'cat4.jpg',
                                blurb : 'I like mice, yarn and boxes.',
                                friends: []
                            },
                            {
                                first : 'Mr. Var',
                                img : 'cat9.jpg',
                                blurb : 'I like mice, yarn and boxes.',
                                friends: []
                            },
                            {
                                first : 'Miss Closure',
                                img : 'cat8.jpg',
                                blurb : 'I like mice, yarn and boxes.',
                                friends: []
                            },
                            {
                                first : 'Temporal Dead Zone',
                                img : 'cat7.jpg',
                                blurb : 'I like mice, yarn and boxes.',
                                friends: []
                            },
                            {
                                first : 'Array-Bian',
                                img : 'cat6.jpg',
                                blurb : 'I like mice, yarn and boxes.',
                                friends: []
                            },
                            {
                                first : 'Objectify Meow',
                                img : 'cat5.jpg',
                                blurb : 'I like mice, yarn and boxes.',
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
