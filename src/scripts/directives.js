var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.directive('productSelector', function() {
		return {
			templateUrl: '../templates/productSelector.html'
		}
	})
	.directive('eyeOptions', function() {
		return {
			templateUrl: '../templates/eyeOptions.html'
		}
	})
	.directive('enterPrescription', function() {
		return {
			templateUrl: '../templates/enterPrescription.html'
		}
	})
	.directive('patientName', function() {
		return {
			templateUrl: '../templates/patientName.html'
		}
	})
	.directive('searchDoctor', function() {
		return {
			templateUrl: '../templates/searchDoctor.html'
		}
	})
	.directive('selectDoctor', function() {
		return {
			templateUrl: '../templates/selectDoctor.html'
		}
	})
	.directive('shippingInfo', function() {
		return {
			templateUrl: '../templates/shippingInfo.html'
		}
	})
	.directive('billingInfo', function() {
		return {
			templateUrl: '../templates/billingInfo.html'
		}
	})
	.directive('addressInput', function() {
		return {
			templateUrl: '../templates/addressInput.html'
		}
	})
	.directive('eyeParams', function() {
		return {
			templateUrl: '../templates/eyeParams.html'
		}
	}).
	directive('contentAsset', function() {
		return {
			restrict: 'E',
			scope: {
				id: "@oid"
			},
			template:
				'<div ng-controller="ContentAssetController" ng-bind-html-unsafe="ajaxData" ng-init="load(id)"></div>'
		}
	});