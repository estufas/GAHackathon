var app = angular.module('PortfolioApp', ['ngRoute', 'PortfolioCtrls']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when(
				'/', {
					templateUrl: 'app/views/index.html',
					controller: 'HomeCtrl'
				}
			).when(
				'/projects', {
					templateUrl: 'app/views/projects.html'
				}
			).when(
				'/contact', {
					templateUrl: 'app/views/contact.html'
				}
			).otherwise ({
				templateUrl: 'views/404.html'
			});

			//$locationProvider.html5Mode(true);
}]);
