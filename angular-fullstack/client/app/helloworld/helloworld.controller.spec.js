'use strict';

describe('Controller: HelloworldCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFullstackApp'));

  var HelloworldCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelloworldCtrl = $controller('HelloworldCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
