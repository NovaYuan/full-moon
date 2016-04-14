/**
 * Created by yuan on 2016/4/13.
 */
'use strict';
angular.module("myApp").controller("ProfileController",['$rootScope', '$scope','$ionicActionSheet', '$ionicPopover', '$timeout', 'ionicDatePicker', '$location', function($rootScope, $scope, $ionicActionSheet, $ionicPopover, $timeout, ionicDatePicker, $location){

    $rootScope.isSetting = true;
    $rootScope.isList = false;
    $rootScope.isChats = false;

    console.log($location);

    $scope.showDatePicker = function (val) {
        var dateSetter = {
            callback: function (val) {
                $scope.birthday = formateDate(val, true);
            },
            inputDate: new Date(),
            mondayFirst: true,
            closeOnSelect: false,
            templateType: 'popup'
        };
        ionicDatePicker.openDatePicker(dateSetter);
    };
}]);