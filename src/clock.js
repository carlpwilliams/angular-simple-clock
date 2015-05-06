(function() {
    'use strict';

    angular.module('components.clock', ['clock.controller']);

    function clock() {
        return {
            controller: 'ClockController',
            controllerAs: 'clock',
            replace: true,
            restrict: 'AE',
            template: '<time class="clock">{{ clock.model.timeNow  | date: "HH:mm:ss "}}</time>'
        };
    }

    angular
        .module('components.clock')
        .directive('clock', clock);
})();