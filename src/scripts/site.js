var productFlowModule = angular.module('productFlowModule', ['ngAnimate']);

productFlowModule
	.controller('DirectivesController', ['$scope', 'stepService', function($scope, stepService) {
		$scope.enterPrescription = function() {
			var viewModel = {};
			stepService.enterPrescription(viewModel);
		}

		$scope.patientFirstName = 'Gordon';
		$scope.patientLastName = 'Freeman';

		$scope.enterPatientName = function() {
			var viewModel = {
				firstName: $scope.patientFirstName,
				lastName: $scope.patientLastName
			};
			stepService.enterPatientName(viewModel);
		}

		$scope.searchDoctor = function() {
			var viewModel = {
				firstName: 'Test',
				lastName: 'Doctor',
				phone: '555-555-5555',
				state: 'UT'
			}

			stepService.searchDoctor(viewModel);
		}

		$scope.selectDoctor = function() {
			stepService.selectDoctor();
		}

		$scope.shippingInfo = function() {
			stepService.shippingInfo();
		}

		$scope.billingInfo = function() {
			stepService.billingInfo();
		}
	}])
	.controller('ContentAssetController', ['$scope', '$http', '$location', function($scope, $http, $location) {
		$scope.ajaxData = '<p>loading...</p>';

		$scope.load = function(contentAsset) {
			$http.get('http://dev01-ecom2-1800contacts.demandware.net/on/demandware.store/Sites-1800contacts-Site/default/Api-GetContentSlot?contentAsset=' + contentAsset)
			.success(function(data, status, headers, config) {
				$scope.ajaxData = data;
			})
		}
	}]);

$.fn.exists = function () {
    return this.length !== 0;
}