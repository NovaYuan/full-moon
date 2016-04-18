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

    $scope.pickImage = function(){
        console.log("haha");
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
    };


    //$scope.onFileSelect = function($files){
    //    for (var i = 0; i < $files.length; i++) {
    //        var file = $files[i];
    //        $scope.upload = $upload.upload({
    //            url: 'server/upload/url',
    //            //method: 'POST' or 'PUT',
    //            //headers: {'header-key': 'header-value'},
    //            //withCredentials: true,
    //            data: {myObj: $scope.myModelObj},
    //            file: file
    //        }).progress(function (evt) {
    //            console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
    //        }).success(function (data, status, headers, config) {
    //           console.log(data);
    //        });
    //    }
    //};
    //$scope.pickImg = function(){
    //  var options = {
    //    maximumImagesCount: 1,
    //    width: 800,
    //    height: 800,
    //    quality: 80
    //  };
    //  $cordovaImagePicker.getPictures(options)
    //    .then(function (results) {
    //      console.log(results);
    //      $scope.imgSrc = results[0];
    //    }, function (error) {
    //      // error getting photos
    //    });
    //}
});
