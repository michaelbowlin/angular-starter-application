(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('staticService', function ($http, $q) {

            return {
                staticData: function () {
                    var persons = {
                        people: [
                            {
                                first : 'Rocky',
                                last : 'Racoon',
                                img : 'cat2.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Tubby',
                                last : 'Turtle',
                                img : 'cat3.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Frank',
                                last : 'Fox',
                                img : 'cat4.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Frank',
                                last : 'Fox',
                                img : 'cat9.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Frank',
                                last : 'Fox',
                                img : 'cat8.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Frank',
                                last : 'Fox',
                                img : 'cat7.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Frank',
                                last : 'Fox',
                                img : 'cat6.jpg',
                                blurb : 'I like mice, yarn and boxes.'
                            },
                            {
                                first : 'Frank',
                                last : 'Fox',
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
