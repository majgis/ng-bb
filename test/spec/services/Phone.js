'use strict';

describe('Service: Phone', function () {

  // load the service's module
  beforeEach(module('ngBbApp'));

  // instantiate service
  var Phone;
  beforeEach(inject(function (_Phone_) {
    Phone = _Phone_;
  }));

  it('should do something', function () {
    expect(!!Phone).toBe(true);
  });

});
