angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {
	$scope.logo = "<img class='logo-header' src='img/logo.png'>";
})
   
.controller('horariosCtrl', function($scope, Horarios) {
	$scope.logo = "<img class='logo-header' src='img/logo.png'>";

	$scope.horarios = Horarios.all();
})
      
.controller('horarioCtrl', function($scope, $stateParams, Horarios) {
	$scope.logo = "<img class='logo-header' src='img/logo.png'>";
	$scope.horario = Horarios.get($stateParams.dia_semana);
})
