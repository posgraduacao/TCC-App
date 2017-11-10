tccApp.directive('telefone', function(){
	return {
		restrict: 'C',
		link: function(scope, element, attrs) {
			$(element).mask("(99) 9999-9999");
		}
	}
});

tccApp.directive('cpf', function(){
	return {
		restrict: 'C',
		link: function(scope, element, attrs) {
			$(element).mask("999.999.999-99");
		}
	}
});

tccApp.directive('celular', function(){
	return {
		restrict: 'C',
		link: function(scope, element, attrs) {
			$(element).mask("(99) 99999-9999");
		}
	}
});

tccApp.directive('cep', function(){
	return {
		restrict: 'C',
		link: function(scope, element, attrs) {
			$(element).mask("99999-999");
		}
	}
});