/**
 * Created by yuan on 2016/4/12.
 */
'use strict';
angular.module("myApp").controller("ListController",['$scope','$ionicActionSheet','$timeout' , function($scope, $ionicActionSheet, $timeout){
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
}]);
