/**
 * Created by yuan on 2016/4/12.
 */
'use strict';
var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when('/list', {
            templateUrl: 'templates/list.html'
        }).
        when('/chats', {
            templateUrl: 'templates/chats.html'
        }).
        when('/setting', {
            templateUrl: 'templates/settings.html'
        }).
        otherwise({
            redirectTo: '/list'
        });
}]);