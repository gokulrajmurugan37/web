felixioApp.controller('AuthenticateExternalClientAppController', ['$scope', '$sce', function($scope, $sce) {
    $scope.blog = {
        title: "Authenticate an External App with Salesforce Using OAuth 2.0",
        intro: "Learn how to securely integrate your external applications with Salesforce using the OAuth 2.0 protocol.",
        oauthIntro: "OAuth 2.0 is a widely used authorization framework that allows users to grant third-party applications access to their protected resources without revealing their usernames and passwords. It acts as a standard for online authorization, enabling users to delegate access to their data on one application to another, while maintaining control over what information is shared.",
        prerequisites: [
            "A Salesforce Developer Account",
            "Access to Salesforce Setup to configure a connected app",
            "Basic knowledge of HTTP, APIs, and JSON",
            "Your external app ready to integrate"
        ],
        steps: {
            createApp: [
                $sce.trustAsHtml("Log in to your Salesforce org."),
                $sce.trustAsHtml("Navigate to <strong>Setup</strong> → <strong>External Client App Manager</strong> → <strong>New External Client App</strong>."),
                $sce.trustAsHtml(`Fill in the Basic Information:
                    <ul class="blog-content-ul">
                        <li><strong>External client app’s name</strong>: My External App</li>
                        <li><strong>API Name</strong>: auto-populates</li>
                        <li><strong>Contact Email</strong>: your email</li>
                    </ul>`),]},

        steps1: {
            createApp1: [        
                $sce.trustAsHtml(`Under <strong>OAuth Settings</strong>:
                    <ul class="blog-content-ul">
                        <li><strong>Callback URL</strong>: Add your app’s redirect URI (e.g., <code>http://localhost:8080/callback</code>)</li>
                        <li><strong>Selected OAuth Scopes</strong>: 
                            <ul>
                                <li><code>Manage user data via APIs (api)</code></li>
                                <li><code>Perform requests on your behalf at any time (refresh_token, offline_access)</code></li>
                                <li><code>Full access (full)</code></li>
                            </ul>
                        </li>
                        <li>Under Flow Enablement <strong>Enable Client Credentials Flow</strong> and also Enable the Required value under <strong>Security</strong></li>    
                    </ul>`),
                $sce.trustAsHtml("Save the app. After a few minutes, your <strong>Consumer Key</strong> and <strong>Consumer Secret</strong> will be available. You'll need these later."),
                $sce.trustAsHtml("Click Edit under the <strong>policies Select OAuth</strong> in the <strong>Start Page</strong> and fill the other field as shown in the <strong>below Screenshot</strong> and Save."),
            ]
        },
        postmanBody: `Body:
Content-Type: application/x-www-form-urlencoded

username = (your User Name)
password = (your password)                                           
grant_type = client_credentials
client_id = (YOUR CONSUMER KEY)
client_secret = (YOUR CONSUMER SECRET)`,
        apiCall: `GET https://yourInstance.salesforce.com/services/data/v59.0/sobjects/Account
Authorization: Bearer YOUR_ACCESS_TOKEN`,
        refreshToken: `POST https://login.salesforce.com/services/oauth2/token
Content-Type: application/x-www-form-urlencoded

username = (your User Name)
password = (your password)
grant_type=refresh_token
client_id=YOUR_CONSUMER_KEY
client_secret=YOUR_CONSUMER_SECRET`,
        securityTips: [
    $sce.trustAsHtml("Always use <strong>HTTPS</strong> for all redirects and token exchanges"),
    $sce.trustAsHtml("Store the <strong>refresh_token</strong> securely"),
    $sce.trustAsHtml("Use <strong>short-lived access tokens</strong> and refresh when necessary"),
    $sce.trustAsHtml("Follow <strong>least privilege principle</strong> with scopes")
],

        conclusion: $sce.trustAsHtml ("Authenticating an external application with Salesforce using OAuth 2.0 allows you to build powerful integrations while maintaining strong security and compliance. By using the <strong>Authorization Code Flow</strong>, your app can act on behalf of users and refresh tokens as needed—all without storing user passwords.")
    };
}]);

