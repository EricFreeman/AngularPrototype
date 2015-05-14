var productFlowModule = angular.module('productFlowModule', []);

productFlowModule
	.controller('StepController', ['$scope', function($scope) {
		$scope.stepNumber = 1;
		$scope.stepName = function() {
			return $scope.stepMap[$scope.stepNumber].stepName;
		}

		$scope.stepMap = [
			{ stepNumber: 1, stepName: 'Find My Brand', stepHeader: 'Find Your Brand of Contacts' },
			{ stepNumber: 2, stepName: 'Eye Options', stepHeader: 'Do you wear the same brand of contacts in both eyes?' },
			{ stepNumber: 3, stepName: 'Enter Prescription', stepHeader: 'Enter your Rx for your Left Eye' },
			{ stepNumber: 4, stepName: 'Patient Name', stepHeader: 'Who are these for?' },
			{ stepNumber: 5, stepName: 'Search Doctor', stepHeader: 'Which doctor prescribed these contact lenses?' },
			{ stepNumber: 6, stepName: 'Select Doctor', stepHeader: 'These are the doctors we found:' },
			{ stepNumber: 7, stepName: 'Shipping Info', stepHeader: 'Where would you like to ship them?' },
			{ stepNumber: 8, stepName: 'Billing Info', stepHeader: 'How would you like to pay for them today?' },
		];

		$scope.chooseProduct = function() {
			console.log('product chosen');
			$scope.incrementStep(1);
		}

		$scope.chooseEyeOptions = function() {
			console.log('eye options chosen');
			$scope.incrementStep(2);
		}

		$scope.incrementStep = function(currentStepNumber) {
			if(currentStepNumber == $scope.stepNumber)
			{
				$scope.stepNumber++;
			}
		}

	}])
	.controller('ProductSelectorController', ['$scope', function($scope) {
		$scope.brands = ['Acuvue', 'Air Optix', 'Avaira', 'Biofinity', 'Biomedics', 'DAILIES', 'Extreme H2O', 'FreshLook', 'Proclear', 'PureVision', 'SoftLens'];
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
					'<div ng-controller="ProductSelectorController">' +
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
				'<div><p>test test</p></span><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />'
		}
	});