var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.controller('EnterPrescriptionController', ['$scope', 'stepService', 'itemWorkflowService', function($scope, stepService, itemWorkflowService) {
		$scope.itemWorkflowService = itemWorkflowService;
		$scope.leftEyeDimensions = {};
		$scope.rightEyeDimensions = {};

		// this watch is only used to default drop downs to the first element in the list
		$scope.$watch('itemWorkflowService.product', function() {
			$scope.leftEyeDimensions = {};
			$scope.rightEyeDimensions = {};

			for(var prop in $scope.itemWorkflowService.product.dimensions) {
				var value = $scope.itemWorkflowService.product.dimensions[prop];
				$scope.leftEyeDimensions[value.name] = value.options[0];
				$scope.rightEyeDimensions[value.name] = value.options[0];
			}
		});

		$scope.enterPrescription = function() {
			itemWorkflowService.leftEye = $scope.leftEyeDimensions;
			itemWorkflowService.rightEye = $scope.rightEyeDimensions;
			stepService.enterPrescription();
		}
	}]);