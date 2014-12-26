'use strict';

/**
 * @ngdoc directive
 * @name yoProjRnd2App.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('yoProjRnd2App')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });
