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
			console.log('patient entered:' + viewModel.firstName + ' ' + viewModel.lastName);
			this.incrementStep(4);
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