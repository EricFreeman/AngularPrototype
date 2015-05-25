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

		$scope.enterPatientName = function() {
			var viewModel = {
				firstName: 'Gordon',
				lastName: 'Freeman'
			};
			stepService.enterPatientName(viewModel);
		}
	}]);

$.fn.exists = function () {
    return this.length !== 0;
}