(function(global, angular){
	'use strict';


	//앵귤러 모듈 정의!
	var app = angular.module('fdsApp', []);

	app.controller('fdsMemberListController', ['$http', function($http){

		// 컨트롤 객체 참조 변수 설정
		var ctrl = this;

		// 참조된 컨트롤 객체의 속성 members 설정(초기값)
		ctrl.members = [];


		// 비동기 통신 수행
		// console.log('$http:', $http)
		$http({
			'method':'GET',
			'url':'/onepiece.json'
		}).then(successAjaxCall, errorAjaxCall);

		function successAjaxCall(response){
			//console.log('비동기 통신에 성공하다.')
			ctrl.members = response.data;
		}
		function errorAjaxCall(response){
			// console.log('비동기 통신에 실패!')
		}

	}]);

	function fdsMemberListController($http){

	}

	fdsMemberListController.$inject = ['$http'];
	app.controller('fdsMemverListController2', fdsMemberListController)
})(this, this.angular);