var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.controller('EnterPrescriptionController', ['$scope', 'stepService', 'itemWorkflowService', function($scope, stepService, itemWorkflowService) {
		$scope.itemWorkflowService = itemWorkflowService;
		$scope.leftEyeDimensions = {};
		$scope.rightEyeDimensions = {};
		$scope.dimensionOptions = {};

		$scope.enterPrescription = function() {
			itemWorkflowService.leftEye = $scope.leftEyeDimensions;
			itemWorkflowService.rightEye = $scope.rightEyeDimensions;
			stepService.enterPrescription();
		}
	}]);