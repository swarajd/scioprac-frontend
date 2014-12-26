'use strict';

describe('Directive: questionValidate', function () {

  // load the directive's module
  beforeEach(module('yoProjRnd2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<question-validate></question-validate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the questionValidate directive');
  }));
});
