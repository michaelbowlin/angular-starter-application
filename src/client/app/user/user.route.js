(function() {
    'use strict';

    angular
        .module('app.user')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'user',
                config: {
                    url: '/user',
                    template: '<user></user>',
                    title: 'user',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-user"></i><span>User</span>'
                    }
                }
            }
        ];
    }
})();
