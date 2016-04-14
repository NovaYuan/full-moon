/**
 * Created by yuan on 2016/4/13.
 */
'use strict';
    angular.module("myApp").controller("ProfileController",function($rootScope, $scope, $ionicActionSheet, $ionicPopover, $timeout, ionicDatePicker, $location){

    $rootScope.isSetting = true;
    $rootScope.isList = false;
    $rootScope.isChats = false;

    if($location.$$search.user === "my"){
        $scope.pageTitle = "我的资料"
    }else{
        $scope.pageTitle = "Ta的资料"
    }

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
});