var felixioApp = angular.module('felixioApp', ['ui.router', 'ngSanitize']);

felixioApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './home/home.html',
      controller: 'MainController'
    })
    .state('about', {
      url: '/about',
      templateUrl: './about/about.html',
      controller: 'AboutController'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: './blog/blog.html',
      controller: 'BlogController'
    })
    .state('service', {
      url: '/service',
      templateUrl: './services/service.html',
      controller: 'ServicesController'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: './contact/contact.html',
      controller: 'ContactController'
    })
    .state('authenticate_external_client_app', {
      url: '/blog/authenticate_external_client_app',
      templateUrl: './blogs/authenticate_external_client_app/authenticate_external_client_app.html',
      controller: 'AuthenticateExternalClientAppController'
    })
    .state('csv_uploader_blog', {
      url: '/blog/csv_uploader_blog',
      templateUrl: './blogs/csv_uploader_blog/csvuploader.html',
      controller: 'CSVController'
    })
    .state('salesforce_to_google_sheets', {
      url: '/blog/salesforce_to_google_sheets',
      templateUrl: './blogs/salesforce_to_google_sheets/salesforce_to_google_sheets.html',
      controller: 'GoogleSheetController'
    });
    $urlRouterProvider.otherwise('/');
       $locationProvider.html5Mode(true);

}]);

felixioApp.run(['$transitions', function($transitions) {
  $transitions.onSuccess({}, function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  });


}]);
