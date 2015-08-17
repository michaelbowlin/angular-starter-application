(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('staticService', function ($http, $q) {

            return {
                staticData: function () {
                    var persons = {
                        first : 'Michael',
                        last : 'Bowlin'

                    };

                    var dfd = $q.defer();
                    dfd.resolve(persons);

                    return dfd.promise;
                }
            };
        });
})();
