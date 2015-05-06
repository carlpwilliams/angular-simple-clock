(function() {
    'use strict';

    angular.module('clock.controller', []);

    function ClockController($interval) {
        var vm = this;
        vm.model={};

        vm.model.timeNow = Date.now();
        vm.model.tickInterval = 1000;

        vm.tick = function() {
            vm.model.timeNow = Date.now();
        };

        $interval(vm.tick, vm.model.tickInterval);
    }

    angular
        .module('clock.controller')
        .controller('ClockController', [ '$interval', ClockController]);
})();