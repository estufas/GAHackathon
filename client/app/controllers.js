angular.module('PortfolioCtrls', [])
.controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.backGround = {
    	background: 'url(http://res.cloudinary.com/estufas/image/upload/v1455144798/IMG_3505_kakctb.jpg)'
    }

  console.log($scope.backGround);
}]);
