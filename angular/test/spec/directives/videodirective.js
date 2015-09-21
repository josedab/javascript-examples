'use strict';

describe('Directive: videoDirective', function () {

  // load the directive's module
  beforeEach(module('videostoreApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<video-directive></video-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the videoDirective directive');
  }));
});
