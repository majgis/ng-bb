'use strict';

describe('Filter: phonecat', function () {

  // load the filter's module
  beforeEach(module('ngBbApp'));

  // initialize a new instance of the filter before each test
  var phonecat;
  beforeEach(inject(function ($filter) {
    phonecat = $filter('phonecat');
  }));

  it('should return the input prefixed with "phonecat filter:"', function () {
    var text = 'angularjs';
    expect(phonecat(text)).toBe('phonecat filter: ' + text);
  });

});
