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
				for(var brandName in data.Brands) {
					var brand = data.Brands[brandName];
					brands.push({
						name: brand.Name,
						products: brand.Products
					})
				}

				$scope.brands = brands;
			});
		}

		$scope.chooseProduct = function(product) {
			itemWorkflowService.brand = product;
			itemWorkflowService.hasSelectedProduct = true;
			stepService.chooseProduct();

			demonwareService.getProduct(product.Id, function(data) {
				console.log(data);
			});
		}
	}]);