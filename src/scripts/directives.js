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
	})
	.directive('searchDoctor', function() {
		return {
			template:
				'<div class="well well-lg" id="step5">' +
					'<h3>Which doctor prescribed these contact lenses?</h3>' +
					'<div ng-controller="DirectivesController">' +
						'<div class="form-group">' +
							'<input type="text" class="form-control" placeholder="Doctor/Clinic Name">' +
						'</div>' +
						'<div class="form-group">' +
							'<input type="text" class="form-control" placeholder="City">' +
						'</div>' +
						'<div class="form-group">' +
							'<select class="form-control">' +
								'<option>State</option>' +
							'</select>' +
						'</div>' +
						'<div class="form-group">' +
							'<input type="text" class="form-control" placeholder="Phone">' +
						'</div>' +
						'<div class="form-group">' +
							'<button type="button" class="btn btn-default" ng-click="searchDoctor()">Search</button>' +
						'</div>' +
					'</div>' +
				'</div>'
		}
	})
	.directive('selectDoctor', function() {
		return {
			template:
				'<div class="well well-lg" id="step6">' +
					'<h3>These are the doctors we found:</h3>' +
					'<div ng-controller="DirectivesController">' +
						'<div class="form-group">' +
							'<button type="button" class="btn btn-default" ng-click="selectDoctor()">Dr Dude 1</button>' +
						'</div>' +
						'<div class="form-group">' +
							'<button type="button" class="btn btn-default" ng-click="selectDoctor()">Dr Dude 2</button>' +
						'</div>' +
						'<div class="form-group">' +
							'<button type="button" class="btn btn-default" ng-click="selectDoctor()">Dr Dude 3</button>' +
						'</div>' +
					'</div>' +
				'</div>'
		}
	})
	.directive('shippingInfo', function() {
		return {
			template:
				'<div class="well well-lg" id="step7">' +
					'<h3>Where would you like to ship them?</h3>' +
					'<div ng-controller="DirectivesController">' +
						'<address-input></address-input>' +
						'<h4>Bill to:</h4>' +
						'<address-input></address-input>' +
						'<div class="form-group">' +
							'<button type="button" class="btn btn-default" ng-click="shippingInfo()">Continue</button>' +
						'</div>' +
					'</div>' +
				'</div>'
		}
	})
	.directive('billingInfo', function() {
		return {
			template:
				'<div class="well well-lg" id="step8">' +
					'<h3>How would you like to pay for them today?</h3>' +
					'<div ng-controller="DirectivesController">' +
						'<div class="form-group">' +
							'<input type="text" class="form-control" placeholder="First Name">' +
						'</div>' +
						'<div class="form-group">' +
							'<input type="text" class="form-control" placeholder="Last Name">' +
						'</div>' +
						'<div class="form-group">' +
							'<button type="button" class="btn btn-default" ng-click="billingInfo()">Place My Order</button>' +
						'</div>' +
					'</div>' +
				'</div>'
		}
	})
	.directive('addressInput', function() {
		return {
			template:
			'<div class="form-group">' +
				'<input type="text" class="form-control" placeholder="First Name">' +
			'</div>' +
			'<div class="form-group">' +
				'<input type="text" class="form-control" placeholder="Last Name">' +
			'</div>' +
			'<div class="form-group">' +
				'<select class="form-control">' +
					'<option>United States</option>' +
				'</select>' +
			'</div>' +
			'<div class="form-group">' +
				'<input type="text" class="form-control" placeholder="Street Address 1">' +
			'</div>' +
			'<div class="form-group">' +
				'<input type="text" class="form-control" placeholder="Street Address 2">' +
			'</div>' +
			'<div class="form-group">' +
				'<input type="text" class="form-control" placeholder="Zip">' +
			'</div>' +
			'<div class="form-group">' +
				'<input type="text" class="form-control" placeholder="City">' +
			'</div>' +
			'<div class="form-group">' +
				'<input type="text" class="form-control" placeholder="State">' +
			'</div>' +
			'<div class="form-group">' +
				'<input type="text" class="form-control" placeholder="Phone">' +
			'</div>'
		}
	});