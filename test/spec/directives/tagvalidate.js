'use strict';

describe('Directive: tagValidate', function () {

  // load the directive's module
  beforeEach(module('yoProjRnd2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tag-validate></tag-validate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tagValidate directive');
  }));
});
