var productFlowModule = angular.module('productFlowModule', []);

productFlowModule
	.controller('StepController', ['$scope', function($scope) {
		$scope.stepNumber = 1;
		$scope.stepName = 'Find Your Branch';
		$scope.stepHeader = 'Find Your Brand of Contacts';

		$scope.chooseProduct = function() {
			console.log('product chosen');
		}
	}])
	.controller('ProductSelectorController', ['$scope', function($scope) {

	}])
	.directive('productSelector', function() {
		return {
   			restrict: 'E',
   			scope: {
   				callback: '&selectProduct'
   			},
			template: '<a href="#" ng-click="callback()">Buy Me</a>'
		}
	});