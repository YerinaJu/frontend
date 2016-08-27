// dom헬퍼함수

// prependChild(부모노드, 자식노드)
// 부모노드의 첫번째 자식노드로 삽입한다.
function prependChild(parent, child){
	parent.insertBefore(child, parent.firstChild)
}


// insertAfter(목표노드, 삽입노드)
// 목표노드 뒤에 삽입노드를 추가한다.
function insertAfter(target,insert){
	var parent = target.parentNode;
	if(target.nextSibling == null){
		parent.appendChild(insert);
	} else {
		parent.insertBefore(insert, target.nextSibling);
	}
}


// .querySelectorAll() 메소드를 단축하여 사용할 수 있는 헬퍼 함수
function queryAll(selector_str, context) {
  // 사용자가 올바른 데이터를 전달하였는가? 검증
  if ( typeof selector_str !== 'string') {
    // 조건이 참이 되면 오류 발생
    throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.');
  }
  // context 인자 값을 사용자가 전달하였는가?
  // 사용자가 context 값을 전달하지 않았을 경우는 undefined 이다.
  // if (typeof context === 'undefined') {
  if (!context) { context = document; }
  return context.querySelectorAll(selector_str);
}

function query(selector, parent) {
  return queryAll(selector, parent)[0];
}

// function $q(selector, hook, context) {
//   var method;
//   if ( hook === 1 ) {
//     method = 'query';
//   } else {
//     method = 'queryAll';
//   }
//   return window[method](selector, context);
// }

// 문서 객체를 제거하는 헬퍼 함수
function remove(node){
  node.parentNode.removeChild(node);
}


// createElement(), createTextNode()
// 2가지 일을 동시에 수행하는 헬퍼 함수
// 요소노드를 생성한 다음 내부에 텍스트노드를 자식 노드로 삽입

function createNode(el_name, text){
	var el_node = document.createElement(el_name);
	if (typeof text !== 'undefined' && typeof text === 'string'){
		var text_node = document.createTextNode(text);
		el_node.appendChild(text_node);
	}
	return el_node;
}

// 자바스크립트의 모든 데이터 유형을 올바르게 감지할 수 있는 헬퍼 함수
function isType(data){
	return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
	// slice는 앞에서 8번째 글자까지 자르고, - 음수는 뒤에서 1번째 글자까지 자른다.
}

function validDate(data, type){
	if( isType(type) !== 'string'){ throw new Error ('...')}
	return 
}

// 데이터 간 동등한지에 대한 유무 파악 헬퍼 함수
function equal(data1, data2){
	return data1 == data2;
}

function strictEqual(data1, data2){
	return data1 === data2;
}


  function queryAll(selector_str, context) {
    if (typeof selector_str !== 'string') {
      throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.');
    }
    if (!context) { context = document; }
    return context.querySelectorAll(selector_str);
  }

  function query(selector, parent) {
    return queryAll(selector, parent)[0];
  }


// 유사 배열을 배열화 시키는 함수
function makeArray(data){
	// 전달된 객체가 배열인지 유사 배열인지 검증부터 한다
	var check_data = isType(data), result_arr = [], len = data.length;
	// 실제 배열
	if (check_data === 'array'){
		return data;
	}

	//유사배열 
	if(len && check_data !=='string'){
		// string인지를 확인하는 이유 = 모든 문자열은 length를 가지고있다
 		while( len--){
 			result_arr.push(data[len]);
 		}
	}
	return result_arr.reverse();
}

// 1. 정식으로 클로저를 사용하는 방법으로 문제 해결 방법
function convertArray_wrapper() {
  // 내부에서 클로저 함수를 반환
  var closureFn;
  if ( Array.from ) {
    // Array.from이 지원되는가?
    closureFn = function(data) {
      return Array.from(data);
    };
  } else {
    // 지원되지 않는가?
    closureFn = function(data) {
      return Array.prototype.slice.call(data);
    }
  }
  return closureFn;
}

var convertArray = convertArray_wrapper();

// 2. 약식(IIFE 패턴)을 사용하여 클로저 처리하는 문제 해결 방법
var convertArray = (function(){
  if (Array.from) {
    return function(data) {
      return Array.from(data);
    }
  } else {
    return function(data) {
      return Array.prototype.slice.call(data);
    }
  }


})();