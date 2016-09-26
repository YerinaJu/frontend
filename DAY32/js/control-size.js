var page_header = query('.page-header');
var increase_btn = query('.btn-increase-text');
var decrease_btn = query('.btn-decrease-text');

// 얼마만큼의 글자를 키우고 줄일 것인가
var change_text = 5;

// 폰트 사이즈의 최대, 최솟값을 지정한다
var limit_up = 80;
var limit_down = 12;

// page-header 요소 객체의 글자 크기 초기화.
// fontSize를 가지고 올 수가 없기 때문에 직접 스타일을 줘서 초기화시킨다. 개발자들이 인라인을 직접 주는 이유가 이런 이유였다!
// 임의로 16px를 주었다.
page_header.style.fontSize = '16px';


// 글자 크기 변경 함수
function changeTextSize(){
	// page-header의 글자 크기를 키운다.

	//button의 텍스트 값을 가지고 온다.
	var operator = this.firstChild.nodeValue;
	var _change_text = change_text;
	var _current_text;


	// 글자 크기를 연산이 가능하도록 변경한다.
	var current_size = parseInt( getStyle(page_header, 'font-size') );

	// operator가 +인지, -인지 비교하여 조건을 걸어준다.
	 if (operator === '+') {
	    _current_text = current_size + change_text;
	  } else {
	    _current_text = current_size - change_text;
	  }

	// 폰트 사이즈를 제어한다
	if ( _current_text > limit_up || _current_text < limit_down) {
     _current_text = current_size;
  }
	// 글자 크기를 증가시켜 값을 설정한다.
	page_header.style.fontSize = _current_text + 'px';
}
// console.log('page_header:', page_header);
// console.log('increase_btn:', increase_btn);
// console.log('decrease_btn:', decrease_btn);


// 버튼에 이벤트 핸들링(핸들러 - 바인딩)

increase_btn.onclick = changeTextSize;
decrease_btn.onclick = changeTextSize;


// 웹 브라우저에서 계산된 CSS 스타일 값을 가져오는 방법
// ```
// // 비 표준 MS IE 방식 (~ IE8)
// $0.currentStyle.fontSize
// 표준 방식 (IE9 ~)
// window.getComputedStyle(대상, 가상요소).스타일속성
// window.getComputedStyle($0,null).fontSize
// ```

function getStyle(el, property, pseudo){
	var value, el_style;
	// 유효성 검사
	if(el.nodeType !== 1){
		console.error('첫번째 인자 el은 요소노드여야 합니다.');
	}
	if(typeof property !== 'string'){
		console.error('두번째 인자 property는 문자열이어야 합니다.')
	}
	if (typeof pseudo !== 'string' &&
	 pseudo){
		console.error('세번재 인자 pseudo는 문자열이어야 합니다.');
	}
	if (window.getComputedStyle){
		el_style = window.getComputedStyle(el, pseudo);
		value = el_style[property];
		console.log(value);
	} else {
		value = el.getComputedStyle[property]
	}
	return value;
}




// ------------------------------------------------
// 대괄호 표기법
// ------------------------------------------------
// getStyle(el, 'outline')

// 펜.색상
// 펜.길이
// 펜.용도
// 펜.가격
// 펜.종료

// 속성 = '색상';

// 펜[속성]
