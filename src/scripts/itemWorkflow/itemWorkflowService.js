var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.service('itemWorkflowService', function() {
		this.brand = {};
		this.hasSelectedProduct = false;
		this.isSameProductInBothEyes = null;

		this.leftEye = {};
		this.rightEye = {};
		
		this.firstName = '';
		this.lastName = '';
	});