tccApp
	.controller('ChamadoController',  
				function($log, $scope, $location, ChamadoFactory, ClienteFactory, ProdutoFactory, ColaboradorFactory, AcaoChamadoFactory, TipoAcaoFactory) {	
	
	$log.debug('ChamadoController [START]');
	
	var self = this;
	self.listChamados = [];
	self.listClientes = [];
	self.listProdutos = [];
	self.listColaboradores = [];
	self.listAcoesChamado = [];
	self.listTiposAcao = [];
	self.chamado = {};
	self.acaoChamado = {};
	self.change = false;
	
	var getChamados = function() {
		ChamadoFactory.getChamados().then(function (response) {
			self.listChamados = response.data;
        }, function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
	}

	var getClientes = function () {
		ClienteFactory.getClientesAtivos().then(function (response){
			self.listClientes = response.data;
		}, function(error) {
			$scope.status = 'Unable to load customer data: ' + error.message;
		});
	}

	var getProdutos = function () {
		ProdutoFactory.getProdutosAtivos().then(function (response){
			self.listProdutos = response.data;
		}, function(error) {
			$scope.status = 'Unable to load customer data: ' + error.message;
		});
	}

	var getColaboradores = function () {
		ColaboradorFactory.getColaboradoresAtivos().then(function (response){
			self.listColaboradores = response.data;
		}, function(error) {
			$scope.status = 'Unable to load customer data: ' + error.message;
		});
	}

	var getTiposAcao = function () {
		TipoAcaoFactory.getTiposAcao().then(function (response){
			self.listTiposAcao = response.data;
		}, function(error) {
			$scope.status = 'Unable to load customer data: ' + error.message;
		});
	}

	self.init = function() {
		getChamados();
		getClientes();
		getProdutos();
		getColaboradores();
		getTiposAcao();
	}
	
	self.addChamado = function() {
		self.chamado = {};
		self.change = false;
	}
	
	self.editChamado = function(chamado) {
		self.change = true;
		angular.copy(chamado, self.chamado);
	}
	
	self.saveChamado = function() {
		ChamadoFactory
			.insertChamado(self.chamado)
				.then(getChamados)
				.then(function (response) {
					$("#myModal").modal('hide');
		        });
	}
	
	self.deleteChamado = function(chamado) {
		if (confirm('Deseja realmente remover o chamado ' + chamado.motivo + '?')) {
			ChamadoFactory
				.deleteChamado(chamado.id)
				.then(getChamados);
		}
	}

	self.addAcaoChamado = function(chamado) {
		if (chamado.status == "Concluído" || chamado.status == "Cancelado") {
			alert("O chamado " + chamado.id + " não pode receber novas ações.");
		} else {
			self.acaoChamado = {};
			angular.copy(chamado, self.chamado);
			self.acaoChamado={"chamado":{"id":self.chamado.id}};
			$("#modalNovaAcao").modal('show');
		}
	}

	self.saveAcaoChamado = function() {
		AcaoChamadoFactory
			.insertAcaoChamado(self.acaoChamado)
				.then(getChamados)
				.then(function(response) {
					$("#modalNovaAcao").modal('hide');
				});
	}

	self.getAcoesChamado = function (chamado) {
		angular.copy(chamado, self.chamado);
		AcaoChamadoFactory.getAcoesChamado(self.chamado.id).then(function (response){
			self.listAcoesChamado = response.data;
		}, function(error) {
			$scope.status = 'Unable to load customer data: ' + error.message;
		})
	}

});