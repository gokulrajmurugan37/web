felixioApp.controller('GoogleSheetController', function($scope, $sce) {

    $scope.title = "Salesforce to Google Sheets Integration";
    $scope.subtitle = "Your complete user guide for syncing salesforce data into googlesheet";

    $scope.navItems = [
      { text: "Overview", href: "#overview" },
      { text: "1. Install Sheet Director", href: "#install" },
      { text: "2. Connect Salesforce", href: "#connect" },
      { text: "3. Fetch Salesforce Data", href: "#fetch" },
      { text: "4. Schedule Automatic Sync", href: "#sync" },
      { text: "Tips & Best Practices", href: "#tips" }
    ];

    $scope.overview = {
      intro: "Connecting Salesforce with Google Sheets allows users to unlock a more flexible and collaborative way of handling CRM data.Instead of exporting data manually each time you need an update, this integration provides real-time access and automated syncing.It's particularly useful for teams in sales, marketing, and operations who need fast and reliable access to data in a familiar spreadsheet environment.",
      points: [
        "Access live Salesforce data directly in Google Sheets",
        "Automate reports and dashboards",
        "Collaborate with teams using real-time updates",
        "Set custom filters and schedule automated refreshes"
      ],
      description: "The tools like Sheet Director, even non-technical users can set up connections, define filters, and automate data flows between Salesforce and Google Sheets—all from a clean and simple user interface.",
      image: "blogs/salesforce_to_google_sheets/Images/Salesforce sheet Integration.jpg"
    };

    $scope.install = {
      step1: $sce.trustAsHtml("To begin, open a blank or existing Google Sheet. In the top navigation, go to <strong>Extensions → Add-ons → Get Add-ons</strong>. This opens the Google Workspace Marketplace where you can search for 'Sheet Director'."),
      step2: $sce.trustAsHtml("Click <strong>Install</strong> on the Sheet Director add-on, and follow the prompts to grant it access to your Google account. This access is required to manage data imports, run automations, and create integrations. Once installed, Sheet Director will appear under the Extensions menu."),
      image: "blogs/salesforce_to_google_sheets/Images/Screenshot marked 4.png"
    };

    $scope.connect = {
      steps: [
        $sce.trustAsHtml(" With Sheet Director installed, navigate to <strong>Extensions → Sheet Director → Open</strong>. This opens the integration panel on the right side of your screen.Here, click the <strong>Create Connection</strong> button."),       
        $sce.trustAsHtml("From the list of available platforms, select <strong>Salesforce</strong>. You’ll be redirected to log into your Salesforce account. Make sure you're using the account with appropriate permissions to read CRM data. Once logged in, grant the necessary access, and return to the Sheet Director interface."),
       $sce.trustAsHtml( "You’ll now be prompted to give your connection a name (e.g., <em>Salesforce_Main</em>). This name helps you manage multiple data sources and ensures clarity in case you connect to more platforms later.")
      ],
      image: "blogs/salesforce_to_google_sheets/Images/Screenshot marked.png"
    };

    $scope.fetch = {
      steps: [
        $sce.trustAsHtml("Once your connection is set up, it's time to bring data into your sheet. Go back to the Sheet Director panel, and click on the <strong>Service → Query</strong> option. This opens a configuration form where you define what Salesforce data to import."),
        $sce.trustAsHtml("Select the object you'd like to query (e.g., Accounts, Opportunities, Leads). You'll then choose the specific fields you want to pull into your sheet. This can include names, emails, created dates, pipeline stages, and more. You can also apply filters—for example, only show records created in the last 30 days."),
        $sce.trustAsHtml("Once your query is set, click <strong>Execute</strong>. The data will populate directly into your sheet, mapped neatly to column headers. This gives you instant access to CRM records without the need for export files or CSV uploads.")
      ],
      image1: "blogs/salesforce_to_google_sheets/Images/Screenshot marked 5.png",
      image2: "blogs/salesforce_to_google_sheets/Images/Screenshot 2025-05-26 123338.png"
    };

    $scope.sync = {
      steps: [
        $sce.trustAsHtml("To avoid manual refreshes, Sheet Director lets you automate data syncing on a schedule. This ensures your Google Sheet always contains the latest Salesforce data. In the panel, go to the <strong>Automation</strong> tab."),
        $sce.trustAsHtml("From here, toggle on automation and choose your desired frequency: hourly, daily, weekly, or even a custom interval. For example, if your team uses dashboards based on this sheet, daily updates might be ideal."),
        $sce.trustAsHtml("Click <strong>Save</strong> after setting the schedule. Your sheet will now auto-update in the background—no need for manual clicks or exports. You’ll also receive alerts if there’s an issue during a scheduled run.")
      ]
    };

    $scope.tips = [
    $sce.trustAsHtml("<strong>Use Clear Connection Names:</strong> Naming your integrations helps avoid confusion, especially in teams."),
    $sce.trustAsHtml("<strong>Filter Large Datasets:</strong> Pulling thousands of records? Use filters to limit the load and improve performance."),
    $sce.trustAsHtml("<strong>Hide Formula Columns:</strong> Add formulas to process the imported data, and hide them to keep the view clean."),
    $sce.trustAsHtml("<strong>Version Control:</strong> Make regular copies of your sheet in case you need to revert changes after a sync."),
    $sce.trustAsHtml("<strong>Collaborate with Caution:</strong> Ensure team members understand what columns are auto-filled to avoid overwrites.")
  ];

    $scope.done = {
      message1: "Congratulations! You've successfully connected Salesforce to Google Sheets using Sheet Director. Your CRM data is now synced, accessible, and ready for analysis or collaboration in a format you already know.",
      message2: "You can now build real-time dashboards, generate custom reports, and even use Google Sheets as a lightweight CRM viewer for your team. Explore further automation and integrations to make the most out of this setup."
    };

    $scope.scrollTo = function(targetId) {
      const elementId = targetId.replace('#', '');
      const targetElement = document.getElementById(elementId);
      
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementY = rect.top + scrollTop;
        const viewportHeight = window.innerHeight;
        const offset = elementY - (viewportHeight / 3.5) + (targetElement.offsetHeight / 3.5);

        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    };
  });