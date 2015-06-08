var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.controller('ProductSelectorController', ['$scope', 'stepService', 'itemWorkflowService', function($scope, stepService, itemWorkflowService) {
		$scope.itemWorkflowService = itemWorkflowService;
		$scope.brands = [];

		$scope.init = function() {
			// make service call to load brands/product list here
			$scope.brands = ['Acuvue', 'Air Optix', 'Avaira', 'Biofinity', 'Biomedics', 'DAILIES', 'Extreme H2O', 'FreshLook', 'Proclear', 'PureVision', 'SoftLens'];
		}

		$scope.chooseProduct = function(product) {
			itemWorkflowService.brand = product;
			itemWorkflowService.hasSelectedBrand = true;
			stepService.chooseProduct();
		}
	}]);