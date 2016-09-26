(function(global, XHR){
	'use strict';
	// XHLHttpRequest() 생성자 함수를 통해 
	// 비동기 통신을 수행할 객체를 생성한다.
	// XMLHttpRequest 생성자 함수, xhr 인스턴스, XHR.prototype 프로토타입
	// var xhr =new XHR();

	// IE 6 이하 웹 브라우저를 위한 대체 코드
  // IE 6 이하의 웹 브라우저는 ActiveX객체를 사용한다.
  var createXHR = (function(){
		// ActiveObject('Microsoft.XMHTTP')
  	XHR = XHR || ActiveObject('Microsoft.XMLHTTP');
  	return function(){
  		return new XHR;
  	};
  })();

	//XMLHttpRequest 생성자의 프로토타입을 확인!
	// console.dir('XMLHttpRequest 생성자.prototype 객체:', XHR.prototype);
	// xhr은 인스턴스 객체
	// console.log('생성된 xhr 객체:', createXHR);

	// 1 createXHR
	// function createXHR(){
	// 	return new XHR();
	// }
	var xhr = createXHR();

	//2 open
	//어디가 보낼 건지 주소 설정한다.
	// xhr.open('GET', 'data/data.txt', false);
	// false는 비동기 통신을 사용할 건지 말건지를 결정하는 값이다. 쓸일 없음
	// createXHR.open('GET', 'data/data.txt');

	// 100 : continue
	// 101: 프로토콜 스위칭
	// 200: OK
	// 404: 클라이언트 에러
	// 500~: 서버 에러


	//3 send
	xhr.send();

	// 만약 동기 통신 방식을 사용할 경우, 데이터가 전부 로드될 때까지 기다리므로, if 구문에서 데이터 전송이 성공한다
	// 반대로 비동기 통신 방식을 사용할 경우, 기다리지 않고 바로 if구문을 실행시키기 때문에 데이터 전송이 실패한다.

	var result_view = document.querySelector('.ajax-result');
	var call_ajax_btn = document.querySelector('.call-ajax-data-btn');

	call_ajax_btn.onclick = updateViewPlace;

	
	// //통신 상태를 확인
	// if(xhr.status === 200){
	// 	console.log('통신 데이터 전송 성공!');
	// 	updateViewPlace.innerHTML = xhr.response;
	// } else {
	// 	console.log('통신 데이터 전송 실패!');
	// }

	xhr.open('GET', 'data/data.txt', false);
	function updateViewPlace(){
		xhr.send();
		if(xhr.status === 200 && xhr.readyState === 4 ){
			console.log('통신 데이터 전송 성공!');
			result_view.textContent = '[' + xhr.statusText +']' + xhr.response;
		} else {
			console.log('통신 데이터 전송 실패!');
			result_view.textContent = '[' + xhr.statusText +']' +'데이터 로드에 실패했습니다....';
		}

	}

  xhr.open('GET', 'data/data.xml');
  xhr.onreadystatechange = function(){
    if(this.status ===200 && this.readyState === 4){
      console.log('통신데이터 전송 성공!!!!!!');

      var doc = this.responseXML;
      var people = doc.querySelector('people');
      // console.log(people)
      var person_list = people.querySelectorAll('person');
      var person, name, tel, mail, i= person_list.length -1;
    }
  }()
 
})(this, this.XMLHttpRequest);

