(function() {
    'use strict';

    angular
        .module('app.home')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/home',
                    template: '<home></home>',
                    title: 'home',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-home"></i><span> Home</span>'
                    }
                }
            }
        ];
    }
})();
