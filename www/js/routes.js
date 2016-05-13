angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsMenu.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsMenu.horRios'
      2) Using $state.go programatically:
        $state.go('tabsMenu.horRios');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-menu/tab1/horarios
      /tabs-menu/tab2/horarios
  */
  .state('tabsMenu.horRios', {
    url: '/horarios',
    views: {
      'tab1': {
        templateUrl: 'templates/horRios.html',
        controller: 'horRiosCtrl'
      },
      'tab2': {
        templateUrl: 'templates/horRios.html',
        controller: 'horRiosCtrl'
      }
    }
  })

  .state('tabsMenu', {
    url: '/tabs-menu',
    templateUrl: 'templates/tabsMenu.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsMenu.horRio'
      2) Using $state.go programatically:
        $state.go('tabsMenu.horRio');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-menu/tab1/horario
      /tabs-menu/tab2/horario
  */
  .state('tabsMenu.horRio', {
    url: '/horario',
    views: {
      'tab1': {
        templateUrl: 'templates/horRio.html',
        controller: 'horRioCtrl'
      },
      'tab2': {
        templateUrl: 'templates/horRio.html',
        controller: 'horRioCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/tabs-menu/home')

  

});