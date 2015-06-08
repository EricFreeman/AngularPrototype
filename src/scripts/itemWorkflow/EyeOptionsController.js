var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.controller('EyeOptionsController', ['$scope', 'stepService', 'itemWorkflowService', function($scope, stepService, itemWorkflowService) {
		$scope.hasSelectedBrand = function() {
			return itemWorkflowService.hasSelectedBrand;
		}

		$scope.selectEye = function(answer) {
			itemWorkflowService.isSameBrandInBothEyes = answer;
			stepService.chooseEyeOptions(answer);
		}
	}]);