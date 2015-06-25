productFlowModule
	.service('stepService', function(animationService, $rootScope) {
		this.stepNumber = 1;

		this.getStepName = function(stepNumber) {
			if(stepNumber <= this.stepMap.length) {
				return this.stepMap[stepNumber - 1].stepName;
			}
			else
			{
				return "Order Placed!";
			}
		}

		this.getStep = function(stepNumber) {
			return this.stepMap[stepNumber - 1];
		}

		this.chooseProduct = function() {
			console.log('product chosen');
			this.incrementStep(1);
		}

		this.chooseEyeOptions = function(answer) {
			console.log('eye options chosen: ' + answer);
			this.incrementStep(2);
		}

		this.enterPrescription = function(viewModel) {
			console.log('prescription entered');
			this.incrementStep(3);
		}

		this.enterPatientName = function(viewModel) {
			console.log('patient entered: ' + viewModel.firstName + ' ' + viewModel.lastName);
			this.incrementStep(4);
		}

		this.searchDoctor = function(viewModel) {
			console.log('doctor searched: ' + viewModel.firstName + ' ' + viewModel.lastName + ' ' + viewModel.phone + ' ' + viewModel.state);
			this.incrementStep(5);
		}

		this.selectDoctor = function() {
			this.incrementStep(6);
		}

		this.shippingInfo = function() {
			this.incrementStep(7);
		}

		this.billingInfo = function() {
			this.incrementStep(8);
		}

		this.incrementStep = function(currentStepNumber) {
			if(currentStepNumber == this.stepNumber)
			{
				this.stepNumber++;
				$rootScope.$broadcast('loadNextStep');
				animationService.scrollToLocation('#step' + this.stepNumber);
			}
		}

		this.stepMap = [
			{ stepNumber: 1, directiveName: 'product-selector', stepName: 'Find My Brand' },
			{ stepNumber: 2, directiveName: 'eye-options', stepName: 'Eye Options' },
			{ stepNumber: 3, directiveName: 'enter-prescription', stepName: 'Enter Prescription' },
			{ stepNumber: 4, directiveName: 'patient-name', stepName: 'Patient Name' },
			{ stepNumber: 5, directiveName: 'search-doctor', stepName: 'Search Doctor' },
			{ stepNumber: 6, directiveName: 'select-doctor', stepName: 'Select Doctor' },
			{ stepNumber: 7, directiveName: 'shipping-info', stepName: 'Shipping Info' },
			{ stepNumber: 8, directiveName: 'billing-info', stepName: 'Billing Info' },
		];
	})
	.service('animationService', function($timeout) {
		this.scrollToLocation = function(id) {
			// delay to make sure it exists on the dom by the time you sroll
			$timeout(function() {
				var target = $(id);
				if(target.exists()) {
					$("body").animate({scrollTop: target.offset().top}, "slow");
				}
			}, 100);
		}
	})
	.service('demonwareService', function($http) {
		this.host = 'http://localhost:1337/api/';

		this.getInitialState = function(callback) {
			this.get('Products/GetInitialState', callback);
		}

		this.getProduct = function(productId, callback) {
			this.post('Products/GetProduct/' + productId, null, callback);
		}

		this.get = function(endpoint, callback) {
			$http.get(this.host + endpoint)
			.success(function(data) {
				callback(data);
			});
		}

		this.post = function(endpoint, body, callback) {
			$http.post(this.host + endpoint, body)
			.success(function(data) {
				callback(data);
			});
		}
	});