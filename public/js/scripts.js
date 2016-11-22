var app = angular.module('app', [])

	.controller('productosCtrl', function ($scope,$http) {
		$http.get('producto/')
			.success(function (data) {
				$scope.producto = data
			})
	})



