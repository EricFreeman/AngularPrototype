var productFlowModule = angular.module('productFlowModule');

productFlowModule
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
			this.incrementStep(6);
		}

		this.billingInfo = function() {
			this.incrementStep(6);
		}

		this.incrementStep = function(currentStepNumber) {
			if(currentStepNumber == this.stepNumber)
			{
				this.stepNumber++;
				animationService.scrollToLocation('#step' + this.stepNumber);
			}
		}

		this.stepMap = [
			{ stepNumber: 1, stepName: 'Find My Brand' },
			{ stepNumber: 2, stepName: 'Eye Options' },
			{ stepNumber: 3, stepName: 'Enter Prescription' },
			{ stepNumber: 4, stepName: 'Patient Name' },
			{ stepNumber: 5, stepName: 'Search Doctor' },
			{ stepNumber: 6, stepName: 'Select Doctor' },
			{ stepNumber: 7, stepName: 'Shipping Info' },
			{ stepNumber: 8, stepName: 'Billing Info' },
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