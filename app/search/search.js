/**
 * Created by bootcamp on 4/23/16.
 */
'use strict';

angular.module('myApp.search', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'search/search.html',
            controller: 'searchCtrl'
        });
    }])

    .controller('searchCtrl', [function() {

    }]);