var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.service('itemWorkflowService', function() {
		this.brand = {};
		this.hasSelectedBrand = false;
		this.isSameBrandInBothEyes = null;

		this.leftEye = {};
		this.rightEye = {};
		
		this.firstName = '';
		this.lastName = '';
	});