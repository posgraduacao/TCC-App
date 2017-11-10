tccApp
	.factory('ColaboradorFactory', 
		['$resource', '$http', function ($resource, $http) {
	
	var urlBase = 'http://localhost:9090/tcc-soa/rest/colaborador';
	var dataFactory = {};

	dataFactory.getColaboradores = function () {
        return $http.get(urlBase);
	};
	
	dataFactory.getColaboradoresAtivos = function () {
        return $http.get(urlBase + '/findActive');
	};

	dataFactory.insertColaborador = function ( colaborador ) {
        return $http.post( urlBase + '/save', colaborador );
    };
    dataFactory.deleteColaborador = function ( id ) {
    	return $http.delete( urlBase + '/delete/' + id );
    };
	
	return dataFactory;
	
}]);