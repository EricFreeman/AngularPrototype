var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.controller('MainController', ['$scope', 'stepService', '$rootScope', '$compile', '$document', function($scope, stepService, $rootScope, $compile, $document) {
		$scope.getStepNumber = function() {
			return stepService.stepNumber;
		}

		$scope.getStepName = function() {
			return stepService.getStepName($scope.getStepNumber());
		}

		$rootScope.$on('loadNextStep', function(stepSelector) {
			var step = stepService.getStep(stepService.stepNumber);
			var template = angular.element(document.createElement(step.directiveName)),
				compiled = $compile(template)($scope);
				
			angular.element('#step' + (stepService.stepNumber - 1)).after(compiled);
		});
	}]);