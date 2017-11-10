tccApp
	.factory('ChamadoFactory', 
		['$resource', '$http', function ($resource, $http) {
	
	var urlBase = 'http://localhost:9090/tcc-soa/rest/chamado';
	var dataFactory = {};

	dataFactory.getChamados = function () {
        return $http.get(urlBase);
	};
	
	dataFactory.insertChamado = function ( chamado ) {
        return $http.post( urlBase + '/save', chamado );
    };
    dataFactory.deleteChamado = function ( id ) {
    	return $http.delete( urlBase + '/delete/' + id );
    };
	
	return dataFactory;
	
}]);