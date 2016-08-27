(function(global, $){
	'use strict';


	// jQuery 네임스페이스의 객체(함수)
	// 함수 객체의 속성으로 dataManager라는 객체를 설정함
	// 이것을 jQuery의 유틸리티 메소드라 함.
	// jQuery.함수()
	$.dataManager = {
		// 'support':function(){
		// 	로컬스토리지 또는 JSON을 지원하는 지 안하느ㄴ지는 객체로 반환시킨다.
		// 	객체로 반환시키는 것은? 
		// }
		'support':(function(){
			// json을 반환시키면 객체로 반환이 되는데, 이걸 boolean값으로 반환 시키기 위해서 형변환을 시켜줌!
			var json = !!global.JSON, localstorage = !!global.localStorage;
			return function(feature){
				if( !feature ){
					return{
						// json과 localstorage가 있다면 true 없다면 false값을 반환한다
						'json':json,
						'localstorage': localstorage //,
						// 마지막 값에는 ,를 쓰지 않는다. JSON문법에 오류가 생기기 때문이다
					};
				}
				// feature에는 어떤 값이 들어올지 모르기 때문에 무조건 소문자로 값을 받아 처리한다
				feature = feature.toLowerCase();
				if( feature ==='json'){ return json; }
				if( feature === 'localstorage'){ return localstorage; }
			}
		})(),
		// 'get': function(key){
		// 	로컬스토리지로 부터 데이터를 가지고 와서 반환한다( 문자열에서 객체로 )
		// 	return 
		// },
		'get': function(key) {
      if (!key || $.type(key) !== 'string' || !this.support().json || this.support('localstorage')) {}
      return global.JSON.parse( global.localStorage.getItem(key) );
    },
		// 'set':function(key, value){
		// 	전달된 value를 문자화 시켜서 로컬스토리지 객체의 ket 값으로 저장시킨다.
		// },
		'set' : function(key, value){
			if( !key || !value || $.type(key) !=='string' || !this.support().json || this.support('localstorage')){
				throw new Error
			}
			global.localStorage.setItem(  key, global.JSON.stringify(value));
		},
		// 'del': function(key){
		// 	key 에 해당하는 데이터를 로컬스토리지에서 제거시킨다.
		// },
		'del': function(key) { global.localStorage.removeItem(key); },
		// 'clear': function(){
		// 	로컬스토리지 데이터가 존재할 경우에 모든 데이터를 제거시킨다.
		// }
		'clear': function() { global.localStorage.clear(); }
	};

})(this, this.jQuery)