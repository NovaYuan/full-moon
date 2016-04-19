/**
 * Created by yuan on 2016/4/12.
 */
'use strict';
angular.module("myApp").controller("ListController", function($rootScope, $scope, $ionicActionSheet, $ionicPopover, $timeout){

    $rootScope.isList = true;
    $rootScope.isSetting = false;
    $rootScope.isChats = false;

    $scope.lists = [
        {
            creatorAvatarUrl: "images/pig.jpg",
            creator: "yuan",
            date: formateDate(new Date(), true),
            imagesUrl: "images/krisQ.jpg",
            comments: "不仅仅是技术，更是梦想"
        },
        {
            creatorAvatarUrl: "images/pig.jpg",
            creator: "yuan",
            date: formateDate(new Date(), true),
            comments: "不仅仅是技术，更是梦想"
        }
    ];

    $scope.share = function(){
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                {text: '微信盆友圈'},
                {text: 'QQ空间'},
                {text: '微博'}
            ],

            buttonClicked: function(index) {
                alert(index)
            }
        });
    };
});
