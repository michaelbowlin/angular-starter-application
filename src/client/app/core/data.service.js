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
                                friends: ['Kepler','Chatka','Kaiser']
                            },
                            {
                                first : 'The Infamous Loop',
                                img : 'cat3.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'RePurrsion',
                                img : 'cat4.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Mr. Var',
                                img : 'cat9.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Miss Closure',
                                img : 'cat8.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Temporal Dead Zone',
                                img : 'cat7.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Array-Bian',
                                img : 'cat6.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Objectify Meow',
                                img : 'cat5.jpg',
                                blurb : 'I like mice, yarn and boxes.'
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
