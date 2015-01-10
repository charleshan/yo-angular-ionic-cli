'use strict';
/* global cordova */
/* global StatusBar */

/**
 * @ngdoc overview
 * @name yoAngularIonicCliApp
 * @description
 * # yoAngularIonicCliApp
 *
 * Main module of the application.
 */
angular
  .module('yoAngularIonicCliApp', ['ionic'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  
  .config(function($stateProvider, $urlRouterProvider) {
	  $stateProvider

	  .state('app', {
	    url: '/app',
	    abstract: true,
	    templateUrl: 'views/menu.html',
	    controller: 'AppCtrl'
	  })

	  .state('app.search', {
	    url: '/search',
	    views: {
	      'menuContent': {
	        templateUrl: 'views/search.html'
	      }
	    }
	  })

	  .state('app.browse', {
	    url: '/browse',
	    views: {
	      'menuContent': {
	        templateUrl: 'views/browse.html'
	      }
	    }
	  })
	    .state('app.playlists', {
	      url: '/playlists',
	      views: {
	        'menuContent': {
	          templateUrl: 'views/playlists.html',
	          controller: 'PlaylistsCtrl'
	        }
	      }
	    })

	  .state('app.single', {
	    url: '/playlists/:playlistId',
	    views: {
	      'menuContent': {
	        templateUrl: 'views/playlist.html',
	        controller: 'PlaylistCtrl'
	      }
	    }
	  });
	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/playlists');
	});