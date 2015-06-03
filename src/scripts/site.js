var productFlowModule = angular.module('productFlowModule', []);

productFlowModule.controller("StepController", ['$scope', function($scope) {
	$scope.stepName = "Find Your Branch";
}]);