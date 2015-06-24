var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.controller('ProductSelectorController', ['$scope', 'stepService', 'itemWorkflowService', 'demonwareService', function($scope, stepService, itemWorkflowService, demonwareService) {
		$scope.itemWorkflowService = itemWorkflowService;
		$scope.brands = [];

		$scope.init = function() {
			demonwareService.getInitialState(function(data) {
				var brands = [{
					name: 'Most Popular Products',
					products: data.MostPopularProducts
				}];
				for(var brandName in data.brands) {
					var brand = data.brands[brandName];
					brands.push({
						name: brand.name,
						products: brand.products
					})
				}

				$scope.brands = brands;
			});
		}

		$scope.chooseProduct = function(product) {
			demonwareService.getProduct(product.id, function(data) {
				itemWorkflowService.product = data.result;
				itemWorkflowService.hasSelectedProduct = true;
				stepService.chooseProduct();
			});
		}
	}]);