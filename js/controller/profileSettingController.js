/**
 * Created by yuan on 2016/4/13.
 */
'use strict';
angular.module("myApp").controller("ProfileController",function($rootScope, $scope, $ionicActionSheet, $ionicPopover, $timeout, ionicDatePicker, $location, $cordovaImagePicker, $cordovaCamera){
    $rootScope.isSetting = true;
    $rootScope.isList = false;
    $rootScope.isChats = false;

    if($location.$$search.user === "my"){
        $scope.pageTitle = "我的资料"
    }else{
        $scope.pageTitle = "Ta的资料"
    }

    $scope.makeImg = function(){
        $ionicActionSheet.show({
            buttons: [
                {text: '拍照上传'},
                {text: '文件选择'}
            ],
            buttonClicked: function(index) {
                if(index === 0){
                    console.log("拍照上传");
                    document.addEventListener("deviceready", function () {
                        var options = {
                            quality: 50,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: Camera.PictureSourceType.CAMERA,
                            allowEdit: true,
                            encodingType: Camera.EncodingType.JPEG,
                            targetWidth: 100,
                            targetHeight: 100,
                            popoverOptions: CameraPopoverOptions,
                            saveToPhotoAlbum: false,
                            correctOrientation:true
                        };

                        $cordovaCamera.getPicture(options).then(function(imageData) {
                            var image = document.getElementById('myImage');
                            image.src = "data:image/jpeg;base64," + imageData;
                        }, function(err) {
                            // error
                        });
                    }, false);
                }else if(index === 1){
                    console.log("文件选择");
                    document.addEventListener("deviceready", function () {
                        var options = {
                            maximumImagesCount: 9,
                            width: 800,
                            height: 800,
                            quality: 80
                        };
                        $cordovaImagePicker.getPictures(options).then(function (results) {
                            console.log(results);
                            for (var i = 0; i < results.length; i++) {
                                console.log('Image URI: ' + results[i]);
                            }
                        }, function (error) {
                            // error getting photos
                        });
                    }, false);
                }
            }
        });
    };

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
