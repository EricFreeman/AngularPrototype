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
	.controller('FindMyBrandController', ['$scope', function($scope) {
		$scope.brands = ['Acuvue', 'Air Optix', 'Avaira', 'Biofinity', 'Biomedics', 'DAILIES', 'Extreme H2O', 'FreshLook', 'Proclear', 'PureVision', 'SoftLens'];
	}])
	.controller('EyeOptionsController', ['$scope', 'stepService', function($scope, stepService) {
		$scope.selectEye = function(answer) {
			stepService.chooseEyeOptions(answer);
		}
	}])
	.controller('EnterPrescriptionsController', ['$scope', 'stepService', function($scope, stepService) {
		$scope.enterPrescription = function() {
			var viewModel = {};
			stepService.enterPrescription(viewModel);
		}
	}])
	.directive('productSelector', function() {
		return {
   			restrict: 'E',
   			scope: {
   				callback: '&selectProduct'
   			},
			template: 
				'<div class="well well-lg" id="step1">' +
					'<h3>Find Your Brand of Contacts</h3>' +
					'<div ng-controller="FindMyBrandController">' +
						'<span ng-repeat="brand in brands">' +
							'<button type="button" class="btn btn-default" ng-click="callback()">{{ brand }}</button>' +
						'</span>' +
					'</div>' +
				'</div>'
		}
	})
	.directive('eyeOptions', function() {
		return {
			template:
				'<div class="well well-lg" id="step2">' +
					'<h3>Do you wear the same brand of contacts in both eyes?</h3>' +
					'<div ng-controller="EyeOptionsController">' +
						'<button type="button" class="btn btn-default" ng-click="selectEye(\'yes\')">Yes</button>' +
						'<button type="button" class="btn btn-default" ng-click="selectEye(\'no\')">No</button>' +
					'</div>' +
				'</div>'
		}
	})
	.directive('enterPrescription', function() {
		return {
			template:
				'<div class="well well-lg" id="step3">' +
					'<h3>Enter your Rx for your Left Eye</h3>' +
					'<div ng-controller="EnterPrescriptionsController">' +
						'<div class="col-md-6">' + 
							'<h4>Left Eye (OS)</h4>' +
							'<hr />' +
						'</div>' +
						'<div class="col-md-6">' + 
							'<h4>Right Eye (OD)</h4>' +
							'<hr />' +
						'</div>' +
						'<button type="button" class="btn btn-default" ng-click="enterPrescription()">Enter</button>' +
					'</div>' +
				'</div>'
		}
	});

$.fn.exists = function () {
    return this.length !== 0;
}