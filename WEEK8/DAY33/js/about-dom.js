var parent_el_child_nodes = parent_el.childNodes;
// parent_el 변수에 참조된 객체의 자식 노드들을 수집
console.log(parent_el_child_nodes);
console.log('수집된 parent_el의 자식 노드의 갯수:', parent_el_child_nodes.length);


// 콘손패널화면에 각 수집된 parent_el_child_nodes의 노드 유형을 출력해보세요.
console.log(parent_el_child_nodes);
console.log(parent_el_child_nodes.item(0).nodeType);
console.log(parent_el_child_nodes[1].nodeType);
console.log(parent_el_child_nodes.item(2).nodeType);
console.log(parent_el_child_nodes.item(3).nodeType);
console.log(parent_el_child_nodes.item(4).nodeType);
console.log(parent_el_child_nodes.item(5).nodeType);
console.log(parent_el_child_nodes.item(6).nodeType);
console.log(parent_el_child_nodes.item(7).nodeType);
console.log(parent_el_child_nodes.item(8).nodeType);


// 미리 보는 반복 구문
for(var i=0;i<parent_el_child_nodes.length;i++){
	console.log(parent_el_child_nodes[i].nodeType);
}

//미리 보는 조건 구문
// parent_el_child_nodes[i].nodeType이 반환 하는 값?
// 1: 요소 노드 
// 3: 텍스트 노드

for(var i=0;i<parent_el_child_nodes.length;i++){
	if(parent_el_child_nodes[i].nodeType === 1){
		console.log('%c 요소 노드 입니다.', 'background-color: #000; color: lightgreen');
	} else {
		console.log('%c 텍스트 노드 입니다.','background-color: #000; color: skyblue');
	}
}







// #parent 안에 첫번째 자식인 .child를 찾아 .child 안에 있는 모든 요소의 노드 타입 유형을 출력하세요.

var parent = document.getElementById('parent');
var parent_firstchild = parent.firstChild.nextSibling;
var child_nodes = parent_firstchild.childNodes;
//console.log(child_nodes.length);


for(var i=0, node_type;i<child_nodes.length;i++){
	//변수 선언은 , 를 통해 변수 이름을 묶어줄 수 있다.
	// 또한 for의 조건식 영역에도 변수 선언이 가능하다.
	node_type = child_nodes[i].nodeType
	if(node_type === 1){
		console.log(node_type + ":" +'이 요소는 요소 노드 입니다.')
	} else if(node_type === 3){
		console.log(node_type + ":" +'이 요소는 텍스트 노드 입니다.')
	} else{
		console.log(node_type + ":" +'이 요소는 주석 노드 입니다.')
	}
	//else if나 else를 사용하지 않고 if만으로도 사용이 가능하다.
}






var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;
// parent_el 변수에 참조된 객체의 자식 노드들을 수집
// console.log(parent_el_child_nodes);
// console.log('수집된 parent_el의 자식 노드의 개수:', parent_el_child_nodes.length);

// 콘솔 패널 화면에 각 수집된 parent_el_child_nodes의 노드 유형을 출력해보세요.
// console.log( 0, parent_el_child_nodes.item(0).nodeType );
// console.log( 1, parent_el_child_nodes[1].nodeType );
// console.log( 2, parent_el_child_nodes.item(2).nodeType );
// console.log( 3, parent_el_child_nodes.item(3).nodeType );
// console.log( 4, parent_el_child_nodes.item(4).nodeType );
// console.log( 5, parent_el_child_nodes.item(5).nodeType );
// console.log( 6, parent_el_child_nodes.item(6).nodeType );
// console.log( 7, parent_el_child_nodes.item(7).nodeType );
// console.log( 8, parent_el_child_nodes.item(8).nodeType );

// 미리보는 자바스크립트의 반복 구문
// while, do ~ while, [for], for ~ in, for ~ of , forEach
// 미리보는 자바스크립트의 조건 구문
// if ~ else if ~ else, switch case defaut break, 3항식
for ( var i=0; i<9; i=i+1 ) {
  // console.log('i:', i);
  // parent_el_child_nodes.item(i).nodeType 이 반환하는 값?

  // 1: ELEMENT_NODE
  if ( parent_el_child_nodes[i].nodeType === 1 ) {
    // console.log( '%c current node is ELEMENT_NODE.', 'background: #222; color: #bada55' );
    // console.log( 'current node is ELEMENT_NODE.' );
    parent_el_first_child_el = parent_el_child_nodes[i];
  }
  // 3: TEXT_NODE
  else {
    // console.log( '%c current node is TEXT_NODE.', 'background: #222; color: #fc414b' );
    // console.log( 'current node is TEXT_NODE.' );
  }
}


parent_el.hasChildNodes();



// #parent 내부의 요소 중 자식이 없는 요소를 모두 콘솔에 기록하라
// hasChildNodes()는 빈 공백 또한 자식노드로 읽기 떄문에 공백이 없을 때만 사용이 가능하다.


var parent = document.getElementById('parent');

var parent_childs = parent.getElementsByTagName('div');

for(var child, i=0, l=parent_childs.length; i<l; i++){
	child = parent_childs[i];
	if(!child.hasChildNodes()){
		console.log(child);
	}
}


for(var i=0;i<parent_childs.length;i++){
	if(!parent_childs[i].hasChildNodes()){
		console.log(parent_childs[i]);
	}
}
i<parent_childs.length는 좋지 않은 습관이야.
for문을 돌 때마다 계속해서 값을 요청받기 때문에 parent_childs.length자체를 변수에 저장해두고 돌리는 것이 좋은 것이다.
