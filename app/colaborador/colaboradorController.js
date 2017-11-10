tccApp
	.controller('ColaboradorController',  
				function($log, $scope, $location, ColaboradorFactory) {	
	
	$log.debug('ColaboradorController [START]');
	
	var self = this;
	self.listColaboradores = [];
	self.colaborador = {};
	self.change = false;
	
	var list = function() {
		ColaboradorFactory.getColaboradores().then(function (response) {
			self.listColaboradores = response.data;
        }, function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
	}
	
	self.init = function() {
		list();
	}
	
	self.addColaborador = function() {
		self.colaborador = {};
		self.change = false;
	}
	
	self.editColaborador = function(colaborador) {
		self.change = true;
		angular.copy(colaborador, self.colaborador);
	}
	
	self.saveColaborador = function() {
		ColaboradorFactory
			.insertColaborador(self.colaborador)
				.then(list)
				.then(function (response) {
					$("#myModal").modal('hide');
		        });
	}
	
	self.deleteColaborador = function(colaborador) {
		if (confirm('Deseja realmente remover o colaborador ' + colaborador.nome + '?')) {
			ColaboradorFactory
				.deleteColaborador(colaborador.id)
				.then(list);
		}
	}

	self.alterarStatusColaborador = function(colaborador) {
		if (colaborador.status==0) {
			colaborador.status=1;
		} else {
			colaborador.status=0;
		}
		ColaboradorFactory
			.insertColaborador(colaborador)
				.then(list);	
	}
	
});