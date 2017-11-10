tccApp
	.factory('ClienteFactory', 
		['$resource', '$http', function ($resource, $http) {
	
	var urlBase = 'http://localhost:9090/tcc-soa/rest/cliente';
	var dataFactory = {};

	dataFactory.getClientes = function () {
        return $http.get(urlBase);
	};

	dataFactory.getClientesAtivos = function () {
        return $http.get(urlBase + '/findActive');
	};
	
	dataFactory.insertCliente = function ( cliente ) {
        return $http.post( urlBase + '/save', cliente );
    };
    dataFactory.deleteCliente = function ( id ) {
    	return $http.delete( urlBase + '/delete/' + id );
    };
	
	return dataFactory;
	
}]);