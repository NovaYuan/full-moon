/**
 * Created by yuan on 2016/4/12.
 */
'use strict';
var app = angular.module("myApp", ["ionic", "ngRoute"]);

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

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