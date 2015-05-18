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
	.service('stepService', function() {
		this.stepNumber = 1;

		this.getStepName = function(stepNumber) {
			return this.stepMap[stepNumber - 1].stepName;
		}

		this.chooseEyeOptions = function(answer) {
			console.log('eye options chosen: ' + answer);
			this.incrementStep(2);
		}

		this.incrementStep = function(currentStepNumber) {
			if(currentStepNumber == this.stepNumber)
			{
				this.stepNumber++;
			}
		}

		this.stepMap = [
			{ stepNumber: 1, stepName: 'Find My Brand', stepHeader: 'Find Your Brand of Contacts' },
			{ stepNumber: 2, stepName: 'Eye Options', stepHeader: 'Do you wear the same brand of contacts in both eyes?' },
			{ stepNumber: 3, stepName: 'Enter Prescription', stepHeader: 'Enter your Rx for your Left Eye' },
			{ stepNumber: 4, stepName: 'Patient Name', stepHeader: 'Who are these for?' },
			{ stepNumber: 5, stepName: 'Search Doctor', stepHeader: 'Which doctor prescribed these contact lenses?' },
			{ stepNumber: 6, stepName: 'Select Doctor', stepHeader: 'These are the doctors we found:' },
			{ stepNumber: 7, stepName: 'Shipping Info', stepHeader: 'Where would you like to ship them?' },
			{ stepNumber: 8, stepName: 'Billing Info', stepHeader: 'How would you like to pay for them today?' },
		];
	})
	.controller('FindMyBrandController', ['$scope', function($scope) {
		$scope.brands = ['Acuvue', 'Air Optix', 'Avaira', 'Biofinity', 'Biomedics', 'DAILIES', 'Extreme H2O', 'FreshLook', 'Proclear', 'PureVision', 'SoftLens'];
	}])
	.controller('EyeOptionsController', ['$scope', 'stepService', function($scope, stepService) {
		$scope.selectEye = function(answer) {
			stepService.chooseEyeOptions(answer);
		}
	}])
	.directive('productSelector', function() {
		return {
   			restrict: 'E',
   			scope: {
   				callback: '&selectProduct'
   			},
			template: 
				'<div class="well well-lg">' +
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
				'<div class="well well-lg">' +
					'<h3>Do you wear the same brand of contacts in both eyes?</h3>' +
					'<div ng-controller="EyeOptionsController">' +
						'<button type="button" class="btn btn-default" ng-click="selectEye(\'yes\')">yes</button>' +
						'<button type="button" class="btn btn-default" ng-click="selectEye(\'no\')">no</button>' +
					'</div>' +
				'</div>'
		}
	});