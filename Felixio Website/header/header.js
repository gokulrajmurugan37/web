felixioApp.controller('HeaderController', ['$scope', '$window','$state', function($scope, $window, $state) {

  $scope.siteName = 'Felixio Technologies';
  $scope.menuOpen = false;

  angular.element($window).bind("scroll", function () {
    var header = angular.element(document.getElementById('header'));
    if (this.pageYOffset > 0) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
    if (!$scope.$$phase) {
      $scope.$applyAsync(); 
    }
  });

  $scope.toggleMenu = function() {
    $scope.menuOpen = !$scope.menuOpen;
    const offset = $scope.menuOpen ? 10 : -10;
    var header = angular.element(document.getElementById('header'));
    header.removeClass('fixed');
    window.scrollBy({ top: offset, behavior: 'smooth' });

  };

  $scope.handleNavClick = function(item) {
    const url = 'index.html#!/' + item.state;
    console.log('url::::::', url);

    if ($state.current.name === item.state) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    $state.go(item.state);
    $scope.closeMenu();
  };

  $scope.closeMenu = function() {
    $scope.menuOpen = false;
    var header = angular.element(document.getElementById('header'));
    header.removeClass('fixed');
  };

  $scope.navItems = [
    { label: 'Home', state: 'home', openInNewTab: true },
    { label: 'Service', state: 'service', openInNewTab: true },
    { label: 'Blog', state: 'blog', openInNewTab: true },
    { label: 'Contact', state: 'contact', openInNewTab: true }
  ];
}]);