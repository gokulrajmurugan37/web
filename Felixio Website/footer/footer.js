felixioApp.controller('FooterController', ['$scope', '$state', function($scope, $state) {
  $scope.handleFooterClick = function(stateName) {
    if ($state.current.name === stateName) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
}]);
