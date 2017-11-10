tccApp
	.factory('AcaoChamadoFactory', 
		['$resource', '$http', function ($resource, $http) {
	
	var urlBase = 'http://localhost:9090/tcc-soa/rest/acaoChamado';
	var dataFactory = {};

	dataFactory.getAcoesChamado = function (id) {
        return $http.get(urlBase + '/getAcoesChamado/' + id);
	};
	
	dataFactory.insertAcaoChamado = function ( acaoChamado ) {
        return $http.post( urlBase + '/save', acaoChamado );
    };
    dataFactory.deleteAcaoChamado = function ( id ) {
    	return $http.delete( urlBase + '/delete/' + id );
    };
	
	return dataFactory;
	
}]);