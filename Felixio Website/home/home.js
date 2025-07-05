felixioApp.controller('MainController', ['$scope', '$window', '$timeout', function($scope, $window, $timeout) {

  $timeout(function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hidden");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll(".home-h1, .home-subtitle-h2, .home-right, .hero-left, .hero-right, .values-header, .value-card, .features-section, .section-title, .approach");
    elements.forEach(el => observer.observe(el));
  }, 0);

  $scope.OurValues = 'Our Values';
  $scope.OurValuesDescription = 'Empowering Excellence with Salesforce';
  $scope.OurServices = 'Our Services';

  $scope.home = {
    title: "Empower Your Business with Salesforce Solutions",
    subtitle: "Our experienced team delivers powerful Salesforce integrations to optimize your workflows and enhance productivity",
    buttonText: "Get Started",
    buttonLink: "#hero",
    image: '../img/home.png'
  };

  $scope.heroSection = {
    heading: 'Who We Are',
    title: "At Felixio, we are dedicated to transforming how businesses operate and connect with their customers. Leveraging the power of Salesforce, the world's leading customer relationship management (CRM) platform, we provide innovative and customized solutions.",
    description: "Our services drive growth, efficiency, and success for our clients. By tailoring Salesforce to meet unique business needs, we ensure that our clients achieve their goals and stay ahead in a competitive market.",
    buttonText: 'Read More',
    buttonLink: '#',
    image: '../img/hero.jpg'
  };

  $scope.values = [
    {
      img: '../img/1.jpg',
      title: 'Integrity',
      description: 'At the core of our business is a commitment to integrity. We believe in conducting ourselves with honesty and transparency, fostering trust with our clients, partners, and colleagues. Our ethical approach guides every decision and action, ensuring we build long-lasting and respectful relationships.'
    },
    {
      img: '../img/2.png',
      title: 'Innovation',
      description: 'Innovation is the driving force behind our success. We constantly seek new ideas and embrace cutting-edge technologies to stay ahead in a rapidly evolving landscape. By encouraging creativity and challenging the status quo, we deliver solutions that not only meet but exceed our clients expectations.'
    },
    {
      img: '../img/3.png',
      title: 'Customer-Centricity',
      description: 'Our clients are central to everything we do. We prioritize their needs and work diligently to understand their goals and challenges. Through personalized service and tailored solutions, we strive to enhance their experience and contribute to their success, ensuring they receive the highest level of satisfaction and support.'
    }
  ];

  $scope.featureList = [
    { title: 'Seamless Integration'},
    { title: 'Advanced Analytics'},
    { title: 'Customizable Workflows'},
    { title: 'Scalable Solutions'},
    { title: 'Streamlined Automation'},
    { title: 'Enhanced Customer Experience'}
  ];

  $scope.activeTab = 'automation';

  $scope.selectTab = function(tabId) {
    $scope.activeTab = tabId;
  };

  $scope.tabs = [
    {
      id: 'automation',
      title: 'Automation',
      description: 'Automate your workflows with powerful tools that enhance efficiency, minimize errors, and free up valuable time for strategic growth.',
      points: [
        {
          title: 'Efficiency',
          content: 'Automating routine tasks helps businesses optimize resource allocation. Seamless process integration accelerates project timelines.'
        },
        {
          title: 'Accuracy',
          content: 'Automated data entry reduces errors from manual processes. Standardizing workflows improves overall performance.'
        }
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'Harness the power of analytics to uncover insights, drive informed decision-making, and optimize your business strategies.',
      points: [
        {
          title: 'Data-Driven Decision Making',
          content: 'Real-time data analysis provides insights to adapt to market changes. AI analytics offer predictive guidance for future planning.'
        },
        {
          title: 'Performance Monitoring and Customization',
          content: 'Custom dashboards monitor performance metrics and help align strategies with customer behavior for improved results.'
        }
      ]
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description: 'Collaboration fosters seamless teamwork and communication, empowering teams to achieve shared goals efficiently.',
      points: [
        {
          title: 'Client Engagement',
          content: 'Dedicated communication channels build transparency and trust. Involving clients increases satisfaction and loyalty.'
        },
        {
          title: 'Collaborative Solutions',
          content: 'Co-creation workshops and collaboration tools improve innovation. Clients feel ownership over the final solution.'
        }
      ]
    }
  ];

  $scope.features = [
    {
      title: 'Delivering Outstanding User Experiences',
      description: 'We are dedicated to creating exceptional user experiences. Our Salesforce solutions are designed to deliver ease and satisfaction, enhancing your interaction with our technology.'
    },
    {
      title: 'Results-Driven Solutions',
      description: 'Our Salesforce solutions are crafted to deliver outstanding results, tailored to meet your specific needs and ensure effective outcomes.'
    },
    {
      title: 'Commitment to Quality',
      description: 'We uphold rigorous quality control in every aspect of our work, ensuring that our Salesforce implementations are reliable and meet your highest expectations.'
    },
    {
      title: 'Accountability and Responsibility',
      description: 'We take full responsibility for our Salesforce solutions and address any issues promptly, ensuring a seamless experience and dependable service.'
    },
    {
      title: 'Innovative and Reliable Solutions',
      description: 'Our dedicated efforts with Salesforce result in innovative and reliable solutions that effectively address your business needs and drive success.'
    },
    {
      title: 'Resolving Challenges Effectively',
      description: 'We either meet your requirements or work tirelessly to resolve any challenges, ensuring that our Salesforce solutions fully align with your objectives.'
    }
  ];

}]);
