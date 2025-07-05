felixioApp.controller('ContactController', ['$scope', '$window', '$location', '$timeout', function($scope, $window, $location, $timeout) {
    
      $scope.successMessage = '';

      angular.element(document.querySelector('#salesforceForm')).on('submit', function(e) {
        e.preventDefault();

        $scope.$apply(() => {
          $scope.successMessage = 'Thank you! Your message has been successfully sent.';
        });

        setTimeout(function() {
          document.getElementById('salesforceForm').submit();
          setTimeout(function() {
            $scope.$apply(() => {
              $scope.successMessage = '';
            });
            location.reload();
          },2000);
        }, 1000);
      });



  }]);