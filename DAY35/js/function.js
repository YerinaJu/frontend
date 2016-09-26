var fn = function(callback){
	if(typeof callback === 'function'){
		// 전달받은 인자나 함수유형이면 실행해라
		callback();
	} else{
		throw new error('전달인자는 함수 데아터 유형이어야 합니당');
	}
};

// 자바스크립트 함수가 일급 객체인 이유?
//함수를 다른 함수의 인자로 전달하여 사용할 수 있다.
fn(function(){});