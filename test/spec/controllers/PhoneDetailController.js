'use strict';

describe('Controller: PhoneDetailControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('ngBbApp'));

  var PhoneDetailControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhoneDetailControllerCtrl = $controller('PhoneDetailControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
