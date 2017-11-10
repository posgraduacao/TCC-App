'use strict';

var tccApp = angular
	.module('app', ['ngRoute', 'ngResource', 'ui.utils.masks', 'idf.br-filters']);

tccApp.config(['$logProvider', function($logProvider){
	$logProvider.debugEnabled(true);
}]);

//cfSystemApp.config(['$httpProvider', function($httpProvider) {
//  $httpProvider.interceptors.push('AuthInterceptor');
//}])