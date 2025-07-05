felixioApp.controller('BlogController', ['$scope', '$state', function($scope, $state) {

  $scope.blogs = [
    {
      title: 'Bulk CSV Record Creation in Salesforce with LWC',
      date: new Date('2025-06-04'),
      state: 'csv_uploader_blog'
    },
    {
      title: 'Salesforce to Google Sheets Integration',
      date: new Date('2025-06-04'),
      state: 'salesforce_to_google_sheets'
    },
    {
      title: 'Authenticate External Client App',
      date: new Date('2025-06-13'),
      state: 'authenticate_external_client_app'
    }
  ];

  $scope.goToBlog = function(blog) {
    if (blog && blog.state) {
      $state.go(blog.state);
    }
  };

}]);
