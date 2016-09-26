(function(global, angular){
	'use strict';

	var app = angular.module('ngApp');

	function getRandomCount(els){
		if(!els.length || els.length === 0) {return 0;}
		return Math.floor(Math.random()*els.length);
	}

	app.controller('tabController',['$scope',function($scope){
		//초기 활성화된 탭
		$scope.selected_tab = getRandomCount($tabmenu_btns);
		$scope.setRandom = function(){
			this.selected_tab = getRandomCount($tabmenu_btns);
		};


		// 초기 활성화된 탭 인덱스 속성
		$scope.selected_tab_idx = 0;
		$scope.isSelectedTab = function(tab_idx){
			return this.selected_tab_idx === tab_idx;
		};

		$scope.selectTab = function(idx){
			this.selected_idx = idx;
		};





	}]);

})(this, this.angular);