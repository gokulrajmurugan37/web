felixioApp.controller('CSVController', ['$scope','$sce', function($scope, $sce) {

    $scope.title = 'Bulk CSV Record Creation in Salesforce with LWC';
    $scope.subtitle = 'Streamline data imports with this Lightning Web Component';

    $scope.howItWorksSteps = [
      {
        title: 'Dynamic Object Selection Dropdown',
        description: 'A lightning-combobox lists only valid, creatable Salesforce objects populated dynamically via Apex. The list automatically filters out system, history, and unsupported objects.'
      },
      {
        title: 'Integrated CSV Upload Interface',
        description: 'Users can upload a .csv file using the lightning-file-upload component, which leverages Salesforce Files to handle the document securely and asynchronously.'
      },
      {
        title: '',
        description: 'Validation checks are performed to ensure field mapping accuracy.'
      },
      {
        title: '',
        description: 'Parsed records are sent to the Apex controller for insertion.'
      },
      {
        title: 'Real-Time Feedback via Toast Messages',
        description: 'After upload and processing, the component shows a Lightning toast notification detailing how many records were processed, succeeded, or failed — improving transparency.'
      }
    ];


    $scope.guideSections = [
    {
      heading: '📁 Sample CSV Format',
      text: 'Ensure your CSV format matches the example below:',
      image: { src: 'blogs/csv_uploader_blog/images/Screenshot 4.png', alt: 'Sample CSV Format' }
    },
    {
      heading: '📸 UI Preview',
      text: 'Below is a screenshot of the user interface:',
      image: { src: 'blogs/csv_uploader_blog/images/Screenshot 1.png', alt: 'LWC UI Preview' }
    },
    {
      heading: 'User Guide',
      list: [
        'Click the dropdown to choose the Salesforce object (e.g., Account, Contact, CustomObject__c). Ensure the user has “Create” access on the object and fields to avoid upload errors.',
        'Ensure your CSV headers match the Salesforce API field names (e.g., Name, Email) and also match Format values correctly (e.g., dates, booleans, numbers)',
        "After upload, you'll see a toast message for success or error feedback.",
        'Use Chrome or Firefox for best performance when handling large files.',
        'You can extend validation by adding schema checks in Apex.'
      ]
    },
    {
      text: 'Selecting Objects from the dropdown box',
      image: { src: 'blogs/csv_uploader_blog/images/Screenshot 2.png', alt: 'Dropdown Selection Preview' }
    },
    {
      text: $sce.trustAsHtml(
        'After upload, a toast message will summarize <strong>Total records</strong> in file, how many records were <strong>successfully inserted</strong> and <strong>failed</strong>'
      ),
      image: { src: 'blogs/csv_uploader_blog/images/Screenshot 5.png', alt: 'Upload Summary Toast' }
    },
    {
      text: 'Uploaded Files in Account Object',
      image: { src: 'blogs/csv_uploader_blog/images/Screenshot 6.png', alt: 'Files in Account Object' }
    }
  ];



    $scope.overviewDescription = "This Lightning Web Component (LWC) provides a convenient interface to upload CSV files and insert data records into any standard or custom Salesforce object.";

    $scope.features = [
      {
        icon: 'fas fa-cubes',
        title: 'Supports Both Standard and Custom Salesforce Objects',
        description: 'The component dynamically lists all queryable, creatable objects using Apex schema metadata. This allows users to upload records into any relevant object, including custom ones.'
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Built-in CSV Parsing with Client-Side Validation',
        description: 'Uploaded CSV files are parsed on the server to match Salesforce data types and field structures. Invalid rows or unrecognized fields are automatically ignored to ensure smooth uploads.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Improves Productivity for Admins and Power Users',
        description: 'Admins can quickly import data directly within the Salesforce UI without relying on technical tools. This streamlines routine data tasks like bulk onboarding or campaign updates.'
      },
      {
        icon: 'fas fa-ban',
        title: 'Eliminates the Need for External Tools or Data Loader',
        description: 'No need to install or manage external apps like Data Loader or Workbench. Everything happens inside Salesforce, using native components and permissions for a seamless experience.'
      }
    ];

    $scope.activeTab = 'html-tab'; 

    $scope.setActiveTab = function(tabName) {
      $scope.activeTab = tabName;
    };

    $scope.isActiveTab = function(tabName) {
      return $scope.activeTab === tabName;
    };

  }]);
