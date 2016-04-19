/**
 * Created by yuan on 2016/4/19.
 */
'use strict';
angular.module("myApp").controller("createController", function($scope, $http, $cordovaGeolocation){

	$scope.pickImages = function(){
		console.log("选择图片");
		document.addEventListener("deviceready", function(){
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
		})
	};

	$scope.getLocation = function(){
		var latlng = "",
			googleMapUrl = "http://maps.google.cn/maps/api/geocode/json?language=CN&latlng=",
			posOpts = {
				timeout: 10000,
				enableHighAccuracy: false
			};

		document.addEventListener("deviceready", function(){
			$cordovaGeolocation.getCurrentPosition(posOpts).
				then(function(position){
					var latitude = position.coords.latitude,
						longitude = position.coords.longitude;

					latlng = latitude + "," + longitude;
					googleMapUrl += latlng;

					$http.get(googleMapUrl).then(function(response){
						$scope.location = response.results[0].formatted_address;
						alert(response.results[0].formatted_address)
					}, function(error){
						$scope.location = error.message;
						alert(error.statusText)
					})
				}, function(error){
					$scope.location = error.message
				});
		});
	}
});