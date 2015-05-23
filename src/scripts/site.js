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
	.service('stepService', function(animationService) {
		this.stepNumber = 1;

		this.getStepName = function(stepNumber) {
			return this.stepMap[stepNumber - 1].stepName;
		}

		this.chooseEyeOptions = function(answer) {
			console.log('eye options chosen: ' + answer);
			this.incrementStep(2);
		}

		this.enterPrescription = function(viewModel) {
			console.log('prescription entered');
			this.incrementStep(3);
		}

		this.incrementStep = function(currentStepNumber) {
			if(currentStepNumber == this.stepNumber)
			{
				this.stepNumber++;
				animationService.scrollToLocation('#step' + this.stepNumber);
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
	.service('animationService', function($timeout) {
		this.scrollToLocation = function(id) {
			var target = $(id);
			if(target.exists()) {
				// delay to make sure it exists on the dom by the time you sroll
				$timeout(function() {
					$("body").animate({scrollTop: target.offset().top}, "slow");
				}, 100);
			}
		}
	})
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