// var div = document.createElement('div');
// var h2 = document.createElement('h2');
// var p = document.createElement('p');
// var button = document.createElement('button');

// var h2_text = document.createTextNode('제목입니다ㅏㅏㅏㅏㅏㅏㅏ');
// var p_text = document.createTextNode('modal window content');
// var btn_text = document.createTextNode('send message');

// div.setAttribute('class', 'modal');
// h2.setAttribute('class', 'modal-title');
// p.setAttribute('class', 'modal-desc');
// button.setAttribute('class', 'modal-cta');


// document.body.appendChild(div);
// div.appendChild(button);
// button.apeentChild(btn_text);

// console.log(div);




// 선생님이 하는 거 정석적인 방법

// 노드 생성
var modal = document.createElement('div');
// 노드 속성 설정
modal.setAttribute('class', 'modal');
//------------------------------------------
var modal_title = document.createElement('h2');
var modal_title_txt = document.createTextNode('Modal Window');
modal_title.setAttribute('class', 'modal-title');
modal_title.appendChild(modal_title_txt);
//------------------------------------------
var modal_desc = document.createElement('p');
var modal_desc_txt = document.createTextNode('Modal Window Content....');
modal_desc.setAttribute('class', 'modal-desc');
modal_desc.appendChild(modal_desc_txt);
//------------------------------------------
var btn_modal_cta = document.createElement('button');
var btn_modal_cta_txt = document.createTextNode('send message');
btn_modal_cta.setAttribute('class', 'modal-cta');
btn_modal_cta.setAttribute('type', 'button');
btn_modal_cta.appendChild(btn_modal_cta_txt);
//------------------------------------------
var btn_modal_close = document.createElement('button');
var btn_modal_close_txt = document.createTextNode('x');
btn_modal_close.setAttribute('class', 'modal-close');
btn_modal_close.setAttribute('type', 'button');
btn_modal_close.setAttribute('aria-label', 'close modal window');
btn_modal_close.appendChild(btn_modal_close_txt);
//------------------------------------------
// 생성된 모든 노드를 병합
modal.appendChild( modal_title );
modal.appendChild( modal_desc );
modal.appendChild( btn_modal_cta );
modal.appendChild( btn_modal_close );
// <body> 요소 맨 뒷편에 삽입
document.body.appendChild(modal);


// body요소 맨 앞으로 삽입하기
// 방법1. 표준 방법인 insertBefore() 메소드를 활용한다
// target_node.parentNode.insertBefore(insert_node, target_node)
// var script_in_body = document.body.querySelector('script');
// console.log(script_in_body);
// var script_parent = script_in_body.parentNode;
// console.log(script_parent);
// script_parent.insertBefore(modal, script_in_body);


// 방법2. 사용자 정의 헬퍼 함수 prependChild()를 활용(직접만든다)

// function prependChild(parent, child){
// 	parent.insertBefore(child, parent.firstChild)
// }


// 특정 노드 ~ 뒤에  삽입하는 헬퍼 함수
// insertAfter()
function insertAfter(target,insert){
	var parent = target.parentNode;
	if(target.nextSibling == null){
		parent.appendChild(insert);
	} else {
		parent.insertBefore(insert, target.nextSibling);
	}
}


// function insertAfter(target, insert){
// 	var next_node = target.nextSibling;
// 	var parent_node = target.parentNode;
// 	if( next_node) { 
// 		parent_node.insertBefore(insert, next_node);
// 	} else {
// 		parent_node.appendChild(insert);
// 	}
// }

insertAfter(document.getElementsByTagName('script')[0], modal);





// .querySelectorAll() 메소드를 단축하여 사용할 수 있는 헬퍼 함수

function queryAll(selector_str, context){
	//사용자가 올바른 데이터를 전달하였는가????를 검증해야함
	if(typeof selector_str !== 'string') {
		//조건이 참이 되면 오류가 발생한다.
		//selector_str의 데이터 타입이 문자열이 아닐 경우.
		throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.');
	}
	// context를 지정하지 않으면 사용할 때마다 document에서부터 거슬러 올라가서 찾게 되니까 지정해줄 수 있으면 하고 아니면 그냥 document에서 찾고
	// if (typeof context === 'undefined') 
	if(!context){
		context = document;
	}
	return document.querySelectorAll(selector_str);
}

function query(selector, parent){
	return queryAll(selector, context)[0];
}

// query(); querySelector와 같은 역할. 모든 선택자 애들을 찾아서 거기서 firstChild만 가지고 올때! [0]번째만 찾는다.
// queryAll(); querySelectorAll과 같은 역할. 모든 선택자 애들을 다 찾아온다.


function queryItem(selector, index, context){
	if(!idx){ idx=0; }
	return queryAll(selector, context)[index];
}










function queryAll(selector, context) {
  // 유효성 검사
  // 문자 데이터인지 확인
  if ( typeof selector !== 'string' ) { throw new Error('전달인자는 문자열만 가능합니다.'); }
  // if ( typeof selector !== 'string' ) { console.error('전달인자는 문자열만 가능합니다.'); }
  // console.info('오류 발생 후 코드가 실행되는가?');
  if ( !context ) { context = document; }
  return context.querySelectorAll(selector);
}
 
function query(selector, context) {
  return queryAll(selector, context)[0];
}

// throw new Error 에러가 발생했을 때 다음 코드를 실행하지 않게 합니다.
// console.Error 구형 브라우저에서는 지원이 되지 않습니다.





