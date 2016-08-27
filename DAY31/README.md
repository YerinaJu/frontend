# day31 TIL

## 복습

##### BOM(브라우저 오브젝트 모델)
- global object - window 웹 브라우저에서의 전역 객체
- location
- history
- screen
- navigator
- document

##### DOM (도큐멘트 오브젝트 모델) 인터페이스

- **Document** : 문서 
- **Object** : 객체, 문서의 요소 
- **Model** : 요소들 간의 관계도 

**DOM의 지원**

- DOM Legacy(LV. 0)
- DOM Legacy(LV. 1) - 실무용
- DOM Legacy(LV. 2) - 실무용
- DOM Legacy(LV. 3) - 지원 XX
- DOM Legacy(LV. 4) - 새롭게 나옴.

**노드**

작은 단위 모든 공백 , 주석, 요소까지 전부 node라고 부른다.
```
//콘솔창에 노트인지 아닌지 확인이 가능하다.
//요소 노드가 맞을 경우 1, 속성 노드가 맞을 경우 2, 텍스트 노트가 맞을 경우엔 3을 반환한다.
//거의 1이나 3을 확인함!

document.body.nodeType
= 1
```

- 문서를 조작하기 위해선 조작을 하려는 요소에 먼저 접근해야 한다
```
//p의 갯수를 알고 싶을 때, 먼저 p에 접근 후, length를 이용하여 갯수를 파악한다
console.log(document.getElementsByTagName('p').length); //= 2
//0번째 요소를 가져오고 싶다면 p에 접근 후, item을 이용하여 해당 요소의 값을 가져온다.
console.log(document.getElementsByTagName('p').item(0)); 
// 유사배열 안에 있는 요소 중 0번째 item을 가져온다.
// 유사배열 ? nodelist. 실제 배열(Array) 요소는 아니지만, 마치 배열처럼 list의 형태로 나타난다.
console.log(document.getElementsByTagName('p')[0].nodeType); 
// 접근한 단락 요소의 노드 유형을 콘솔 패널에 기록한다.
```
```script
<!-- ex -->
// 문서에서 이미 찾은 대상 요소를 기억할 수 있는 공간에 넣어준다면?
// 1. 자바스크립트 변수 선언을 한다.
// 2. 선언된 메모리 공간에 레이블을 따로 한다.

var paras, uls, lis, headings, links; 

// 3. 레이블이 달린 메모리 공간에 사물을 담다
// 대입 연상자 (=) 변수 값;
paras = document.getElementsByTagName('p');
divs = document.getElementsByTagName('div');


// 4. 함수를 사용한다.
function print(msg){
	console.log(msg);	
}

// 5. 함수를 실행한다. 
print(paras);
print(divs);

```

- DOM 메소드
  * document.getElementById() 아이디 속성을 가져온다. // 아이디기 때문에 단일 속성을 가져온다
  * document.getElementsByTagName() 아이디 속성을 가져온다. // 클래스기 때문에 집합으로 가져온다.

- DOM 이벤트 속성 : 사용자가 무언가를 수행했을 떄 기능하는 속성!
`onclick`
`ondblclick`
`onmouseover`
`onmouseout` .....


**버튼에 for문을 사용하여 버튼의 값을 가지고와서 background-color를 바꿔보기**
```
<!-- html -->
<button type="button">#f50054</button>
<button type="button">#8800f3</button>
<button type="button">#139df3</button>
<button type="button">#20f97d</button>
<button type="button">#f2ce09</button>

<!-- script -->
var body = document.body;

var button = document.getElementByTagName('button');

for(var i=0;i<button.length;i++){
	button[i].onmouseover = function(){
		body.style.backgroundColor = this.innerHTML;
		console.log('sdfkjsdlkfjslkdfjslkfjkl');
	}
}

