tccApp.config([ '$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider.when('/', {
				templateUrl : "templates/home.html",
				controller : "HomeCtrl"
			}).when('/cliente', {
				templateUrl : "app/cliente/cliente.html",
				controller : "ClienteController"
			}).when('/produto', {
				templateUrl : "app/produto/produto.html",
				controller : "ProdutoController"
			}).when('/colaborador', {
				templateUrl : "app/colaborador/colaborador.html",
				controller : "ColaboradorController"
			}).when('/chamado', {
				templateUrl : "app/chamado/chamado.html",
				controller : "ChamadoController"
			}).otherwise({
				redirectTo : '/404'
			});
			
			$locationProvider.html5Mode(true);
		} ]);

tccApp.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push(function($q, $injector) {
		var $http = null;
		return {
			'request' : function(config) {
				// MOSTRA LOADER
				return config;
			},
			'response' : function(response) {
				// get $http via $injector because of circular dependency
				// problem
				$http = $http || $injector.get('$http');
				if ($http.pendingRequests.length < 1) {
					// ESCONDE LOADER
					$('#loading').hide();
				}
				return response;
			},
			'responseError' : function(rejection) {
				// get $http via $injector because of circular dependency
				// problem
				$http = $http || $injector.get('$http');
				if ($http.pendingRequests.length < 1) {
					// ESCONDE LOADER
					// MENSAGEM DE ERRO
				}

				return rejection;
			}
		};
	});
} ]);