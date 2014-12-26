'use strict';

/**
 * @ngdoc directive
 * @name yoProjRnd2App.directive:questionValidate
 * @description
 * # questionValidate
 */
angular.module('yoProjRnd2App')
  .directive('questionValidate', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ctrl) {
        ctrl.$parsers.unshift(function(value) {
        	var valid;
        	if (question === undefined) {
        		valid = false;
        	} else {
        		value = value.replace("&nbsp;", "").replace(/(\r\n|\n|\r)/gm,"").trim();
        		var bodyParts = value.split('<hr />');
        		if (bodyParts.length !== 2) {
        			valid = false;
        		} else {
        			var part1 = bodyParts[0];
	        		var part2 = bodyParts[1];
        			if (part1.length === 0 || part2.length === 0) {
        				valid = false;
        			} else {
	        			valid = (bodyParts[0].length >= 8 && bodyParts[1].length >= 8 );
        			}
        		}
        	}
        	ctrl.$setValidity('questionValidate', valid);
        	return valid ? value : undefined;
        });
      }
    };
  });
