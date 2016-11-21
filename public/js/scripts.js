var app = angular.module('app', [])

	.controller('productosCtrl', function ($scope,$http) {
		$scope.prueba = 88;
		$http.get('/producto')
			.success(function (data) {
				$scope.productos = data;
			});
})