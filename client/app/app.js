var app = angular.module('PortfolioApp', ['ngRoute', 'PortfolioCtrls']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when(
				'/', {
					templateUrl: 'app/views/index.html'
					// controller: 'HomeCtrl'
				}
			).when(
				'/projects', {
					templateUrl: 'app/views/bootstrap-custom.html'
					// controller: 'HomeCtrl'
				}
			).when(
				'/contact', {
					templateUrl: 'app/views/contact.html'
					// controller: 'HomeCtrl'
				}
			).otherwise ({
				templateUrl: 'views/404.html'
			});

			//$locationProvider.html5Mode(true);
}]);
