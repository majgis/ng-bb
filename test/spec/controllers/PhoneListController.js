'use strict';

describe('Controller: PhoneListControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('ngBbApp'));

  var PhoneListControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhoneListControllerCtrl = $controller('PhoneListControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
