'use strict';

describe('Service: helloworld', function () {

  // load the service's module
  beforeEach(module('angularFullstackApp'));

  // instantiate service
  var helloworld;
  beforeEach(inject(function (_helloworld_) {
    helloworld = _helloworld_;
  }));

  it('should do something', function () {
    expect(!!helloworld).toBe(true);
  });

});
