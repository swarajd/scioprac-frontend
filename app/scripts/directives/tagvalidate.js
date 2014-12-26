'use strict';

/**
 * @ngdoc directive
 * @name yoProjRnd2App.directive:tagValidate
 * @description
 * # tagValidate
 */
angular.module('yoProjRnd2App')
  .directive('tagValidate', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ctrl) {
        ctrl.$parsers.unshift(function(value) {
        	var valid;
        	if (value === undefined) {
        		valid = false;
        	} else {
        		var tags = value.split(',');
        		valid = (tags.length === 3 && tags[2].length > 0);
        	}
        	ctrl.$setValidity('tagValidate', valid);
        	return valid ? value : undefined;
        });
      }
    };
  });
