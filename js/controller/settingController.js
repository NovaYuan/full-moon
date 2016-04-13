/**
 * Created by yuan on 2016/4/13.
 */
'use strict';
angular.module("myApp").controller("SettingController",['$rootScope', '$scope','$ionicActionSheet', '$ionicPopover', '$timeout' , function($rootScope, $scope, $ionicActionSheet, $ionicPopover, $timeout){

    $rootScope.isSetting = true;
    $rootScope.isList = false;
    $rootScope.isChats = false;
}]);