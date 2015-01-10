'use strict';

describe('Controller: PlaylistsCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularIonicCliApp'));

  var PlaylistsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlaylistsCtrl = $controller('PlaylistsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of playlists to the scope', function () {
    expect(scope.playlists.length).toBe(6);
  });
});
