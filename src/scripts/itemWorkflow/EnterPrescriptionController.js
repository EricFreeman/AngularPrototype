var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.controller('EnterPrescriptionController', ['$scope', 'stepService', 'itemWorkflowService', function($scope, stepService, itemWorkflowService) {
		$scope.itemWorkflowService = itemWorkflowService;
		$scope.leftEyeDimensions = {};
		$scope.rightEyeDimensions = {};
		$scope.dimensionOptions = {};
	}]);