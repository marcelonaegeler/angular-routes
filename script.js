// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider, $locationProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController',
			title: ''
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController',
			title: 'About'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController',
			title: 'Get in touch'
		})
		.when('/contact/:2', {
			templateUrl : 'pages/contact2.html',
			controller  : 'contactController',
			title: 'Get in touch'
		})

		// route for the contact page
		.when('/404', {
			templateUrl : 'pages/404.html',
			title: 'Page not found'
		})

		.otherwise({
			redirectTo: '/404'
		});
	$locationProvider.html5Mode(true)
});

scotchApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope, $http) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
	$scope.teste = [
		{
			nome: 'Marcelo'
		}
		, {
			nome: 'Xandão'
		}
	];
});

scotchApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});