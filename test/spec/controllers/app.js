'use strict';

describe('Controller: AppCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularIonicCliApp'));

  var AppCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppCtrl = $controller('AppCtrl', {
      $scope: scope
    });
  }));

  it('should add test', function () {

  });
});
