var productFlowModule = angular.module('productFlowModule', ['ngAnimate']);

productFlowModule
	.controller('MainController', ['$scope', 'stepService', function($scope, stepService) {
		$scope.getStepNumber = function() {
			return stepService.stepNumber;
		}

		$scope.getStepName = function() {
			return stepService.getStepName($scope.getStepNumber());
		}

		// example of a callback function.
		// we probably would rather use the service example for the other steps.
		$scope.chooseProduct = function() {
			console.log('product chosen');
			stepService.incrementStep(1);
		}
	}])
	.controller('DirectivesController', ['$scope', 'stepService', function($scope, stepService) {
		$scope.brands = ['Acuvue', 'Air Optix', 'Avaira', 'Biofinity', 'Biomedics', 'DAILIES', 'Extreme H2O', 'FreshLook', 'Proclear', 'PureVision', 'SoftLens'];

		$scope.selectEye = function(answer) {
			stepService.chooseEyeOptions(answer);
		}

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
	}]);

$.fn.exists = function () {
    return this.length !== 0;
}