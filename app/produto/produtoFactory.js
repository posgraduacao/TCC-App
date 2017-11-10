tccApp
	.factory('ProdutoFactory', 
		['$resource', '$http', function ($resource, $http) {
	
	var urlBase = 'http://localhost:9090/tcc-soa/rest/produto';
	var dataFactory = {};

	dataFactory.getProdutos = function () {
        return $http.get(urlBase);
	};

	dataFactory.getProdutosAtivos = function () {
        return $http.get(urlBase + '/findActive');
	};
	
	dataFactory.insertProduto = function ( produto ) {
        return $http.post( urlBase + '/save', produto );
    };
    dataFactory.deleteProduto = function ( id ) {
    	return $http.delete( urlBase + '/delete/' + id );
    };
	
	return dataFactory;
	
}]);