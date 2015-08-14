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
                    templateUrl: 'app/friend/friend.html',
                    controller: 'Friend',
                    controllerAs: 'vm',
                    title: 'friend',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-contact"></i><span>friend</span>'
                    }
                }
            }
        ];
    }
})();
