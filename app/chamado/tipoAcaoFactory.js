tccApp
	.factory('TipoAcaoFactory', 
		['$resource', '$http', function ($resource, $http) {
	
	var urlBase = 'http://localhost:9090/tcc-soa/rest/tipoAcao';
	var dataFactory = {};

	dataFactory.getTiposAcao = function () {
        return $http.get(urlBase);
	};
	
	return dataFactory;
	
}]);