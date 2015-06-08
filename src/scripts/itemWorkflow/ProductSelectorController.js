var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.controller('ProductSelectorController', ['$scope', 'stepService', function($scope, stepService) {
		$scope.brands = [];

		$scope.init = function() {
			// make service call to load brands/product list here
			$scope.brands = ['Acuvue', 'Air Optix', 'Avaira', 'Biofinity', 'Biomedics', 'DAILIES', 'Extreme H2O', 'FreshLook', 'Proclear', 'PureVision', 'SoftLens'];
		}

		$scope.chooseProduct = function() {
			stepService.chooseProduct();
		}
	}]);