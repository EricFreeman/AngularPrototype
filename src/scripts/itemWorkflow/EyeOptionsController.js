var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.controller('EyeOptionsController', ['$scope', 'stepService', 'itemWorkflowService', function($scope, stepService, itemWorkflowService) {
		$scope.hasSelectedProduct = function() {
			return itemWorkflowService.hasSelectedProduct;
		}

		$scope.selectEye = function(answer) {
			itemWorkflowService.isSameProductInBothEyes = answer;
			stepService.chooseEyeOptions(answer);
		}
	}]);