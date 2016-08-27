// closure
// callback
// loop+closure
// IIFE
// Hoist

// 전역
var yerina; // 전역에 선언된 변수는 사용하는 사람들과의 충돌이 일어날 수 있다.

// 코드를 작성하기 위한 공간 생성 -> IIFE패턴
(function(global){
	'use strict';
	var yerina;
	// 지역 변수(전역과 충돌나지 않는다.)
	console.log(yerina); // undefined

	global.yeri = yerina; // global 전역에 노출된다. 바깥으로 빠져나오게 됨.
})(this);

// 왜 즉시 실행함수를 쓰는가? 즉시 실행되면 변수가 선언이 되잖아! 따로 실행하지 않아도 사용이 가능한 변수. 함수가 실행되면 메모리에서 사라져버리기 때문에 효율적인 측면에서는 좋다.

console.log(yerina); // 전역 변수가 없다면 error가 뜬다.


// 스크립트를 사용해 오늘이 무슨 요일인지 출력하기.
// 주중, 주말을 구분하여 콘솔에 뜨게 한다.
// 주중이면 "출근 시렁"
// 주말이면 "잠만보"
// 요일은 임의로 조정이 가능하다.


var today = (new Date()).getDay();
var result;

// switch(today){
// 	case 0: 
// 		result = "주말이다";
// 			console.log(result);
// 		break;
// 	case 1: 
// 		result = "월요일출근노노";
// 		console.log(result);
// 		break;
// 	case 2: 
// 		result = "출근노노";
// 		console.log(result);
// 		break;
// 	case 3: 
// 		result = "출근노노";
// 		console.log(result);
// 		break;
// 	case 4: 
// 		result = "출근노노";
// 		console.log(result);
// 		break;
// 	case 5: 
// 		result = "출근노노";
// 		console.log(result);
// 		break;
// 	case 6: 
// 		result = "놀자";
// 		console.log(result);
// 		break;
// 	defalut: console.log("뭘입력한거니...");
// }

switch(today){
	case 0:
	case 6:
		console.log("주말이예염");
		break;
	default:
		console.log("잠만보");
}


var day = new Date();
console.log("오늘의 요일은?"+day.getDay());
console.log("현재 시각은? "+day.getHours()+"시 "+day.getMinutes()+"분 "+day.getSeconds()+"초");



(function(global){
	'use strict';

	//.button-set을 선택한다.
	var button_set = query('.button-set');
	//.button-set [CONTEXT] 내부에서 .button을 모두 수집한다 = [NODELIST]
	var buttons = makeArray( queryAll('.button', button_set));
	// 수집된 [NODELIST]를 순환하여 (코드의 흐름 제어) 클릭 이벤트에 함수(이벤트헨들러)를 연결(바인딩)한다.

	// for문 예시 클로저가 필요하당 --------------------------------
	for(var i=0, l=buttons.length; i<l;i+=1){
		buttons[i].onclick = (function(i){
			return function(){
				console.log(i);
			}
		})(i);
	}

	// // 클로저를 쓰지 않고 버튼 객체의 속성을 추가하는 방법
	// for(var button, i=0, ;=buttons.length; i<l; i+=1){
	// 	button = buttons[i];
	// 	// 객체.속성을 추가하여 for문이 돌 때 마다 각 버튼 객체의 index 속성에 i 값을 할당한다.
	// 	button.index = i;
	// 	button.onclick = function(){
	// 		// this 키워드 컨텍스트를 참조하는 변수
	// 		// this를 사용하여 각 버튼 객체의 index 속성 값에 접근하여 출력한다.
	// 		console.log(this.index);
	// 	}
	// }

	// forEach예시 굳이 클로저가 필요없이 개별적인 영역을 가진다-------------
	buttons.forEach(function(index){
		// arguments 함수 내부에서만 접근 가능한 매개변수(전달인자들을 묶어 놓은 집합 객체)
		// console.log(arguments); 유사배열객체.
		button.onclick=function(){
			console.log(index);
		}
	})
	// 각 버튼을 사용자가 클릭할 경우, 자신의 순환 인덱스 숫자를 콘솔에 출력한다.

})(this);


(function(global){
	'use strict';
	// 숫자 객체 생성자를 사용하여 숫자 1부터 10까지를 변수 num1 ~ num10에 생성
	// 단, num1 ~ num10에는 숫자 값이 담겨야 한다

	var num1 = (new Number(1)).valueOf();

	// 불리언 객체 생성자를 사용하여 불리언 true, false로 연속되는 변수 boo1 ~ boo10에 생성
	// 단, boo1 ~ boo10에는 불리언 값만 담겨야 한다..

	var boo1 = (new Boolean()).valueOf();
	var boo2 = (new Boolean(" ")).valueOf();
	var boo3 = (new Boolean(e)).valueOf();
	var boo4 = (new Boolean(2)).valueOf();
	var boo5 = (new Boolean({})).valueOf();
})(this);


