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
            creatorAvatarUrl: "../../images/pig.jpg",
            creator: "yuan",
            date: formateDate(new Date(), true),
            imagesUrl: "../../images/krisQ.jpg",
            comments: "不仅仅是技术，更是梦想"
        },
        {
            creatorAvatarUrl: "../../images/krisQ.jpg",
            creator: "yuan",
            date: formateDate(new Date(), true),
            comments: "不仅仅是技术，更是梦想"
        }
    ];

    //$scope.markLike = function($event){
    //    var eventTarget = $event.currentTarget,
    //        iconOClass = "icon ion-ios-heart-outline",
    //        iconClass = "icon ion-ios-heart";
    //
    //    if(eventTarget.children[0].className == iconOClass){
    //        eventTarget.children[0].className = iconClass
    //    }else{
    //        eventTarget.children[0].className = iconOClass
    //    }
    //};
    //
    //$scope.showWhoLike = function($event){
    //    alert(2);
    //};

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
