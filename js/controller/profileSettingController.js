/**
 * Created by yuan on 2016/4/13.
 */
'use strict';
angular.module("myApp").controller("ProfileController",['$rootScope', '$scope','$ionicActionSheet', '$ionicPopover', '$timeout', function($rootScope, $scope, $ionicActionSheet, $ionicPopover, $timeout, ionicDatePicker){

    $rootScope.isSetting = true;
    $rootScope.isList = false;
    $rootScope.isChats = false;

    $scope.showDatePicker = function (val) {
        var ipObj1 = {
            callback: function (val) {  //Mandatory
                console.log('Return value from the datepicker popup is : ' + val, new Date(val));
                $scope.selectedDate1 = new Date(val);
            },
            disabledDates: [
                new Date(2016, 2, 16),
                new Date(2015, 3, 16),
                new Date(2015, 4, 16),
                new Date(2015, 5, 16),
                new Date('Wednesday, August 12, 2015'),
                new Date("08-16-2016"),
                new Date(1439676000000)
            ],
            from: new Date(2012, 1, 1),
            to: new Date(2016, 10, 30),
            inputDate: new Date(),
            mondayFirst: true,
            disableWeekdays: [0],
            closeOnSelect: false,
            templateType: 'popup'
        };
        ionicDatePicker.openDatePicker(ipObj1);
    };
}]);