felixioApp.controller('ServicesController', ['$scope', '$window', function($scope, $window) {

    $scope.colors = ['blue', 'orange', 'green', 'red', 'purple', 'pink'];
    $scope.currentIndex = 0;

    function getNextColor() {
      var color = $scope.colors[$scope.currentIndex];
      $scope.currentIndex = ($scope.currentIndex + 1) % $scope.colors.length;
      return color;
    }

    $scope.services = [
      {
        color: getNextColor(),
        title: 'Salesforce Implementation & Customization',
        description: 'We design and deploy tailored Salesforce solutions to fit your business needs. Our team handles everything from initial setup and configuration to customizing Salesforce to match your specific workflows and requirements',
        link: '#',
        linkText: 'Read More'
      },
      {
        color: getNextColor(),
        title: 'Salesforce Integration Services',
        description: 'Seamlessly connect Salesforce with your existing systems, such as ERP, marketing platforms, or other CRM tools. Our integration services ensure smooth data flow and unified processes across your technology stack.',
        link: '#',
        linkText: 'Read More'
      },
      {
        color: getNextColor(),
        title: 'Salesforce Administration & Support',
        description: 'Our experts provide ongoing administration, including user management, data maintenance, and troubleshooting. We offer continuous support to ensure your Salesforce instance runs efficiently and effectively.',
        link: '#',
        linkText: 'Read More'
      },
      {
        color: getNextColor(),
        title: 'Salesforce Development',
        description: 'Develop custom applications, workflows, and integrations to extend Salesforce’s functionality, addressing specific business challenges and improving process automation.',
        link: '#',
        linkText: 'Read More'
      },
      {
        color: getNextColor(),
        title: 'Salesforce Analytics & Reporting',
        description: 'Design and implement advanced reporting and analytics solutions to help you make informed decisions, track key metrics, and uncover actionable insights from your Salesforce data.',
        link: '#',
        linkText: 'Read More'
      },
      {
        color: getNextColor(),
        title: 'Salesforce Optimization',
        description: 'Unlock your Salesforce system\'s full potential with our optimization services. We enhance performance, integrate new features, and conduct regular audits to ensure efficiency and alignment with your business goals.',
        link: '#',
        linkText: 'Read More'
      }
    ];
  }]);