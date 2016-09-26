# DAY33 TIL

## 자바스크립트 퀴즈 복습

document.firstChild.nextSibling => html
표준 문서이기 때문에 공백은 제외한다. firstChild는 독타입을 의미한다.

undefined, null이 객체가 아닌 이유? 딱 두개만 객체가 아니다!
html엔진이 해석하면서 문서를 객체화 시키는 것... 
->prooerties 패널에서 확인이 가능하다.
자바스크립트의 모든 객체는 Object ; [Consrtuctor(생성자)-> 어머니 같은 존재]이며 함수이다. 오브젝트는 모든 객체의 조상(소유한 능력->.toString 메소드)

문자열, 숫자열 , 불린, 배열, 함수, 객체, Math, Date, 정규표현식..
나열된 객체 생성자로부터 태어난 객체(인스턴스)를 통해 확인(검증)
!!"자바스크립트".toString = true;
(!! ;  형변환 Boolean값으로 값을 반환한다. 맞으면 true, 틀리면 false)




## 자바스크립트
#### DOM API
[선택]현재 선택한 대상 el
-id 속성으로 대상을 선택 document.getElementById('아이디이름')
-요소노드으로 대상을 선택 document.getElementsByTagName('태그이름')
-class 속성으로 대상을 선택 document.getElementsByClassName('클래스이름')
[탐색]부모노드 el.parentNode
[탐색]첫번째 자식 노드 el.firstChild
[탐색]마지막 자식 노드 el.lastChild
[탐색]이전 형제 노드 el.previousSibling
[탐색]다음 형제 노드 el.nextSibling
[탐색]자식 노드들 el.childNodes



**childNodes** 선택
childNodes를 사용하면 사용한 자식들의 모든 노드요소를 다 가져온다.
childNodes는 거의 사용하지 않는다.

```
var parent_el = document.getElementById('parent');
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

if(parent_el_child_nodes[i].nodeType === 1){
	console.log('요소 노드 입니다.');
} else {
	console.log('텍스트 노드 입니다.');
}
```

**children**
childNodes와 다르게, 자식의 요소 노드들만 가져온다. 일일히 선택하지 않아도 간단하게 사용이 가능하다!
ie 하위버전도 지원된다.

**firstChild**
자식의 첫번째 노드 요소를 가져온다.

**lastChild**
마지막 노드를 가져온다. `childNodes.length -1`

**nextSibling**
다음 형제 노드를 가져온다.

**previousSibling**
이전 형제 노드를 가져온다.

**parentNode**
현재 노드의 부모 노드를 가져온다.
대부분이 요소노드를 가져온다. (주석이나 공백들은 다른 요소를 감쌀 수 없기 때문!)

```
> 노드의 유형/이름/값을 출력하는 방법

- nodeType
	요소노드 = 1
	텍스트노드 = 3
	주석 노드 = 8
- nodeName
	노드 요소의 이름을 대문자로 반환한다. .toLowerCase를 이용해서 소문자로 변환할 수 있다.
	TEXT-NODE의 경우는 '#text'를 반환한다.
- nodeValue
	TEXT-NODE만 접근이 가능하다.
	ELEMENT_NODE의 경우 null을 반환한다.


**firstElementChild**
첫번째 자식노드 찾기(요소노드만)
**lastElementChild**
마지막 자식노드 찾기
> ie8 이하는 지원하지 않습니다.
**nextElementChild**
**previousElementChild**

#### 새로운 DOM API //ie9이상만 지원된다.
traversal Properties
	- .firstChild -> .firstElementChild
	- .lastChild -> .lastElementChild
	- .previousSibling -> .previousElementSibling
	- .nextSibling -> .nextElementSibling
	- .parentNode -> .parentElement


6+
###노드 정보
HTMl DOM 방식의 속성 접근 방법
웹의 초창기 때부터 존재하던 옛날  속성들
id, className, title(아이콘이나 텍스트를 사용할 때 사용자가 접근하기 쉽도록 하기 위해서 툴팁으로 뜨게 하는 것이 title);

```
console.log(parent.id); 
console.log(parent.className);
console.log(parent.title);
```

새롭게 등장한 속성들
data-*, aria-*, role

console.log('parent_el.role:', parent_el.getAttribute('role'));
console.log('parent_el.data-contianer':, parent_el.getAttribute('data-container'));
console.log('parent_el.aria-hidden', parent_el.getAttribute('Attribute'))


- hasChildNodes()
자식 요소가 있고 없고를 골라 사용할 수 있다.
값을 Boolean값으로 내보내며, 값이 있으면 true, 없으면 false값.
```
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
 ```




**클래스 속성 값으로 문서 객체 대상 선택하기**
//ie9이상만 지원된다. 그런데 잘 쓰지 않기 때문에 생각하지 않아도 된다
```
<!-- document.links; //HTMLCollection 레거시코드 -->
var childs = document.getElementsByClassName('child'); -> nodelist로 가져온다.
console.log(childs, child.length);
```


**css선택자를 통해 문서 객체를 선택하는 방법**
querySelector('#id /.class')
//ie 8이상 지원된다.
css 선택자이름으로 가져올 수 있다.
해당 요소의 첫번째 요소를 가져온다.
```
document.querySelector('#parent > .child:nth-child(3)');
```

> querySelector() === .queryElectorAll()[0]
```
<!-- ex -->
document.querySelectorAll('#parent *')[0];
=> <div class="child"></div>

document.querySelector('#parent *');
=> <div class="child"></div>
```


querySelectorAll('css 선택자이름')
모든 노드를 집합의 형태로 가져올 수 있다.
```
document.querySelectorAll('#parent *');
```


####dom api를 사용하여 노드를 생성하기
**요소노드 만들기**
- createElement('요소이름')

```
var maked_div = document.createElement('div');
console.log('div:')
```

**clonenode**
cloneNode(불린값)
기본 값은 false이며, true가 되면 자식의 모든 값이 복제 된다.













##### 참고
> 자바스크립트에서는 contentblock이란 것이 존재한다. 변수가 앞서 선언되면, 변수의 공간을 저장하기 때문에 뒤이어 i를 사용할 떄는 var를 붙이지 않아도 i를 변수로 사용이 가능하다.

> $0 콘솔창에서만 사용이 가능하며, 현재 대상을 나타낸다(= this)