// while문

var boo = true, m = 10;

while(boo) {
	console.log(boo ? '참참참!' : '짝짝짝!');
	if(m-- > 0){
		boo = !boo;
	}
}




function errorMsg(message){
	if(isType(message) !== 'string'){
		//함수 자신을 다시 호출: 재귀함수
		errorMsg('오류 메시지는 문자 데이터 유형이어야 합니다.');
	}
	throw new Error(message);
}

// function isElNode(el_node){
// 	if( el_node.nodeType === 1){
// 		return true;
// 	} else { return false; }
// }
function isElNode(el_node){
	return el_node.nodeType === 1;
}

function isntElNode(el_node){
	return !isElNode(el_node){
		// return ek_node.nodeType !==1;
	}
}

function prevEl(el_node){
	// 검증: 유효성 검사
	if ( isElNode(el_node) ){
		errorMsg('전달된 인자는 요소노드여야 합니다.');
	}
	// el_node.previousSibling; // 요소노드를 찾아야 한다. 텍스트노드랑 주석노드를 만나면 요소 노드를 만날 때 까지 반복시킨다.
	do {
		el_node = el_node.previousSibling;
	} while( el_node && el_node.nodeType !== 1);
	// node가 존재하고, el_node의 노드타입이 요소 노드가 아닐 경우 반복시킨다
	return el_node;
}

function nextEl(el_node) {
  // 검증: 유효성 검사
  if ( isntElNode(el_node) ) {
    errorMsg('전달된 인자는 요소노드여야 합니다.');
  }
  // 구형 IE 9+, 신형 웹 브라우저
  if ( el_node.nextElementSibling ) {
    return node.nextElementSibling;
  }
  // 구형 IE 6-8
  else {
    do { el_node = el_node.nextSibling; }
    while(el_node && !isElNode(el_node) );
    return el_node;
  }
}


// 첫번째 자식요소 노드를 찾는 헬퍼함수


function _firstEl(node) {
  return node.children[0];
}

function _lastEl(node) {
  var children = node.children;
  return children[children.length - 1];
}


function firstEl(el_node){
	if( isntElNode(el_node) ){ errorMsg('요소노드를 전달해야 합니다.');}
	if ( el_node.firstElementChild ){
		return el_node.firstElementChild;
	} else {
		el_node = el_node.firstChild;
		return (el_node && isntElNode(el_node)) ? nextEl(el_node) : el_node;
	}
} 

// 마지막 자식요소 노드를 찾는 헬퍼 함수

function lastEl(el_node){
	if( isntElNode(el_node) ){ errorMsg('요소노드를 전달해야 합니다.');}
	if ( el_node.lastElementChild ){
		return el_node.lastElementChild;
	} else {
		el_node = el_node.lastChild;
		return (el_node && isntElNode(el_node)) ? nextEl(el_node) : el_node;
	}
} 


//for문 continue를 사용해보는 예제

// 미션! fruits 변수에 참조된 데이터에는 과일이 아닌 것들이 포함되어 있습니다.
// 이를 for문을 상ㅇ하여 불필요한 데이터를 뺀 실제 과일만 담은 배열을 반환하시오.

var fruits = ['바나나', false, '딸기', true, '포도', null, '수박'];
fruits.push(function(){});
fruits.push({'name':'object'});

for(var i=0, o=fruits.length, real_fruits = [], fruit;i<0;i++ ){
	fruit = fruits[i];
	if(isType(fruit) !== 'string'){
		continue;
		// 조건이 맞지 않으면 바로 건너뛰고 실행구문을 다시 반복해라.
	}

	real_fruits.push(fruit);
}

console.log(real_fruits)