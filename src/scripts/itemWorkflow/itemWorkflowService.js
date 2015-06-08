var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.service('itemWorkflowService', function() {
		this.leftEye = {};
		this.rightEye = {};
		
		this.firstName = '';
		this.lastName = '';
	});