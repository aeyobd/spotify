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

    .controller('searchCtrl', ['$scope', '$http', function($scope,$http) {
        $scope.search = function (){
            var searchUrl='https://api.spotify.com/v1/search?q=' + $scope.searchValue + '&type='+ $scope.searchType;
            $http.get(searchUrl).then(setScope)
        }
        var setScope = function(response) {
            var searchType = $scope.searchType;
            $scope.searchResults = response.data[searchType + 's'].items;
        }
        
        $scope.searchType = 'artist';
        $scope.changeRadio = function() {
            $scope.searchResults = null;
        }

    }]);