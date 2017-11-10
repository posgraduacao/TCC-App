tccApp
	.controller('ClienteController',  
				function($log, $scope, $location, ClienteFactory) {	
	
	$log.debug('ClienteController [START]');
	
	var self = this;
	self.listClientes = [];
	self.cliente = {};
	self.change = false;
	
	var list = function() {
		ClienteFactory.getClientes().then(function (response) {
			self.listClientes = response.data;
        }, function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
	}
	
	self.init = function() {
		list();
	}
	
	self.addCliente = function() {
		self.cliente = {};
		self.change = false;
	}
	
	self.editCliente = function(cliente) {
		self.change = true;
		angular.copy(cliente, self.cliente);
	}
	
	self.saveCliente = function() {
		ClienteFactory
			.insertCliente(self.cliente)
				.then(list)
				.then(function (response) {
					$("#myModal").modal('hide');
		        });
	}
	
	self.deleteCliente = function(cliente) {
		if (confirm('Deseja realmente remover o cliente ' + cliente.nome + '?')) {
			ClienteFactory
				.deleteCliente(cliente.id)
				.then(list);
		}
	}

	self.alterarStatusCliente = function(cliente) {
		if (cliente.status==0) {
			cliente.status=1;
		} else {
			cliente.status=0;
		}
		ClienteFactory
			.insertCliente(cliente)
				.then(list);	
	}
	
});