(function(global, storage, $){
	'use strict';

	// 사용자의 웹 브라우저가 localStorage를 지원하는가????
	// localstorage는 용량이 작기 때문에 문자열 데이터만 가져올 수 있다.

	var $html = $('html');

	if(storage){
		$html.addClass('localstorage');
	}else{
		$html.addClass('no-localstorage');
	}

	// 만약 localstorage 지원이 안된다면, 사용자에게 웹브라우저 업데이트를 권고한다
	if($html.hasClass('no-localstorage')){
		console.info('로컬 스토리지가 지원되는 최신 브라우저로 업데이트 해주세요!');
		return;
		// 리턴을 만나면 함수가 종료된다
	}

	// 사용자의 웹 브라우저에 데이터를 저장, 가져오기,지우기 등을 수행할 수 있다.

	//데이터를 가져와보자
	var FDS = storage.getItem('FDS');
	FDS ? console.log('FDS 값:', FDS) : console.log('FDS는 존재하지 않습니다..')

	// 데이터 저장하기
	// 만약 FDS 값이 거짓일 경우, FDS 값이 없다면 if()문을 실행한다.
	if(!FDS) {
		storage.setItem('FDS', 'front-End Develop School, FAST CAMPUS');
	}
	// 데이터 지우기
	if(FDS){
		storage.removeItem('FDS');
	}

	//데이터 모두 지우기 
	// key 데이터가 1개 이상 존재한다면, 모든 데이터를 제거하라.
	storage.length > 0 && storage.clear();


	// JSON?
	// js 객체 -> JSON 문자열 -> JS 객체
	// Model Date[Me]
	var me = {
		'name':'예리나',
		'job':'개발자',
		'age':23,
		'gender':'female',
		'email':'@yerina.com',
		'favorite':['밥, 잠']
	};

	//로컬 스토리지에 저장한다
	var string_me = JSON.stringify(me);
	//storage는 객체형태! 이걸 문자열로 바꿔줘야 한다.
	storage.setItem('yerina', string_me);

	// 전역에 공개한다.
	global.me = me

	// 반대로 json문자열을 객체로 바꾼다
	var get_me = storage.getItem('yerina');
	get_me = JSON.parse(get_me);
	console.log(get_me);



	//실슬
	// 가공된 형태의 사용저 정의 객체?
	 // = 헬퍼함수처럼 헬퍼 객체를 만들어보자
	// 정의할 사용자 정의 객체는 로컬스토리지 제어에 유용한 메소드를 포함한다
	// 데이터 가져오기 저장하기 지우기 모두 지우기 같은 것을 수행할 수 있는 사용자 정의 객체를 생성한다.

	var MyStorage = Function(data, status){

	}
})(this, this.localStorage, this.jQuery);