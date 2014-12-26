'use strict';

/**
 * @ngdoc directive
 * @name yoProjRnd2App.directive:ckeditor
 * @description
 * # ckeditor
 */
angular.module('yoProjRnd2App')
  .directive('ckeditor', function () {
    return {
      require: '?ngModel',
      link: function(scope, elem, attrs, ngModel) {
      	var ck = CKEDITOR.replace(elem[0]);

      	if (!ngModel) {
      		return;
      	}
        
      	ck.on('pasteState', function() {
      		scope.$apply(function() {
      			ngModel.$setViewValue(ck.getData());
      		});
      	});

      	ngModel.$render = function() {
      		ck.setData(ngModel.$viewValue);
      	};

      }
    };
  });
