var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.controller('ProductSelectorController', ['$scope', '$http', 'stepService', 'itemWorkflowService', function($scope, $http, stepService, itemWorkflowService) {
		$scope.itemWorkflowService = itemWorkflowService;
		$scope.brands = [];

		$scope.init = function() {
			$http.get('http://localhost:1337/api/Products/GetInitialState')
			.success(function(data) {
				$scope.brands = data.MostPopularProducts.map(function(product) { return product.Name; });
			});
		}

		$scope.chooseProduct = function(product) {
			itemWorkflowService.brand = product;
			itemWorkflowService.hasSelectedBrand = true;
			stepService.chooseProduct();
		}
	}]);