/**
 * Created by yuan on 2016/4/19.
 */
'use strict';
angular.module("myApp").controller("popoverController", function($rootScope, $scope){
	$scope.hidePopover = function(){
		$scope.popover.hide();

		$rootScope.isList = true;
		$rootScope.isSetting = false;
		$rootScope.isChats = false;
	}
});