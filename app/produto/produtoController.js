tccApp
	.controller('ProdutoController',  
				function($log, $scope, $location, ProdutoFactory) {	
	
	$log.debug('ProdutoController [START]');
	
	var self = this;
	self.listProdutos = [];
	self.produto = {};
	self.change = false;
	
	var list = function() {
		ProdutoFactory.getProdutos().then(function (response) {
			self.listProdutos = response.data;
        }, function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
	}
	
	self.init = function() {
		list();
	}
	
	self.addProduto = function() {
		self.produto = {};
		self.change = false;
	}
	
	self.editProduto = function(produto) {
		self.change = true;
		angular.copy(produto, self.produto);
	}
	
	self.saveProduto = function() {
		ProdutoFactory
			.insertProduto(self.produto)
				.then(list)
				.then(function (response) {
					$("#myModal").modal('hide');
		        });
	}
	
	self.deleteProduto = function(produto) {
		if (confirm('Deseja realmente remover o produto ' + produto.nome + '?')) {
			ProdutoFactory
				.deleteProduto(produto.id)
				.then(list);
		}
	}
	
	self.alterarStatusProduto = function(produto) {
		if (produto.status==0) {
			produto.status=1;
		} else {
			produto.status=0;
		}
		ProdutoFactory
			.insertProduto(produto)
				.then(list);	
	}

});