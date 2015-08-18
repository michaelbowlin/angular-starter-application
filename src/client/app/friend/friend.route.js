(function() {
    'use strict';

    angular
        .module('app.friend')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'friend',
                config: {
                    url: '/',
                    template: '<friend-maker></friend-maker>',
                    title: 'friend',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-user"></i><span> Friend</span>'
                    }
                }
            }
        ];
    }
})();
