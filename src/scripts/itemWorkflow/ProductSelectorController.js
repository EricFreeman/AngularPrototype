var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.controller('ProductSelectorController', ['$scope', '$http', 'stepService', 'itemWorkflowService', function($scope, $http, stepService, itemWorkflowService) {
		$scope.itemWorkflowService = itemWorkflowService;
		$scope.brands = [];

		$scope.init = function() {
			$http.get('http://localhost:1337/api/Products/GetInitialState')
			.success(function(data) {
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
		}
	}]);