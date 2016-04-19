/**
 * Created by yuan on 2016/4/18.
 */
'use strict';
angular.module("myApp").controller("createDaysController", function($rootScope, $scope, $ionicPopover, $timeout){
	$rootScope.isList = true;
	$rootScope.isSetting = false;
	$rootScope.isChats = false;

	$scope.popover = $ionicPopover.fromTemplateUrl('templates/menu-popover.html', {
		scope: $scope
	});

	$ionicPopover.fromTemplateUrl('templates/menu-popover.html', {
		scope: $scope
	}).then(function(popover) {
		$scope.popover = popover;
	});

	$scope.showMenu = function($event){
		$scope.popover.show($event);
	};
});