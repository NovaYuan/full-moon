/**
 * Created by yuan on 2016/4/13.
 */
'use strict';
angular.module("myApp").controller("SettingController",function($rootScope, $scope, $ionicLoading, $timeout){

    $rootScope.isSetting = true;
    $rootScope.isList = false;
    $rootScope.isChats = false;

    $scope.asyncData = function(){
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: false,
            maxWidth: 200,
            showDelay: 0
        });

        $timeout(function(){
            $ionicLoading.hide();

            $scope.asyncDate = formateDate(new Date()) + " 更新";
        }, 3000)
    };

    $rootScope.isSimpleView = true;
    console.log($rootScope.isSimpleView);

    $scope.changeView = function(){
        console.log($rootScope.isSimpleView)
    };

});