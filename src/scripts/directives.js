var productFlowModule = angular.module('productFlowModule');

productFlowModule
	.directive('productSelector', function() {
		return {
   			restrict: 'E',
   			scope: {
   				callback: '&selectProduct'
   			},
			template: 
				'<div class="well well-lg" id="step1">' +
					'<h3>Find Your Brand of Contacts</h3>' +
					'<div ng-controller="DirectivesController">' +
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
					'<div ng-controller="DirectivesController">' +
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
					'<div ng-controller="DirectivesController">' +
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
	})
	.directive('patientName', function() {
		return {
			template:
				'<div class="well well-lg" id="step4">' +
					'<h3>Who are these for?</h3>' +
					'<div ng-controller="DirectivesController">' +
						'<div class="form-group">' +
							'<input type="text" class="form-control" placeholder="First Name">' +
						'</div>' +
						'<div class="form-group">' +
							'<input type="text" class="form-control" placeholder="Last Name">' +
						'</div>' +
						'<div class="form-group">' +
							'<button type="button" class="btn btn-default" ng-click="enterPatientName()">Enter</button>' +
						'</div>' +
					'</div>' +
				'</div>'
		}
	});