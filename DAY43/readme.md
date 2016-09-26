# DAY47

## AngularJS를 배워보자


앵귤러 ; SPA 제작에 최적화된 프레임워크
- 여러 모듈로 구성되어 있음
	* Controller
	* Factories / Services
	* View
	* Directives
	* Filters


### 모듈 

** VIEW **

- Data Binding
앵귤러는 양방향 데이터를 기본으로 사용한다

모델과 템플릿이 합쳐지면 뷰가 구성되고, 뷰와 모델은 지속적인 과찰을 통해 서로 업데이트가 가능하다.

- Directive(지시자)
HTML을 확장하는 기능을 한다.

문섲객체모델을 조작한다
```
ngShow ; 조건의 값이 참일 경우 보여진다
ngView 제이슨으로 가져와서 문서로드가 성공하면 뿌려준다.
ngRepeat 정확히는 for문, forEach처럼 객체를 일일히 반복해서 돌릴 필요가 없다.
```

데이터를 연결한다
```
ngInit ; 초기화하는 것. 변수가 값들을 넣을 수 있다.
ngModel ; 양방향으로 데이터 연결이 가능하다. form에서 밸리데이션 검사가 한결 쉬워진다.

컨츠롤러와 모듈
```
ngApp ; 
ngController ; 뷰에 하나의 컨트롤러를 연결해서 하나의 컴포넌트를 만들 수 있다.
```
뷰 로딩
스타일링
이벤트 제어가 가능하다
```
ngClick ; 
```

* 디렉티브를 정의하는 방법

ng-지시자 앞에 data-접두사를 붙여줘야 표준을 지킬 수 있다.

- Expressions
표현식으로 마크업 내부에 {{}}를 사용할 수 있다.
```html
<body data-ng-app>
<!-- html 뿐 아니라 body에도 붙일 수 있다. -->
	<h1>{{ 'yamoo' + 9}}</h1>
	// 표현식 내부에서는 일부 자바스크립트나, 숫자 연산이 가능하다..
	// ((9/3 +2) % 4)
	// [9, 2, 1]join('-')
	
	<!-- 디렉티브(Directive) -->
	<p data-ng-bind="'yamoo' +9"></p>
</body>
```


data-ng-cloak은 {{}} 중괄호 표현식을 사용할 경우, 문서의 로딩 속도가 느리면 중괄호가 보여지는 상황이 발생하는 것을 막아준다.

> 앵귤러의 lazy-loading
> ngSrc를 사용할 경우, img src를 늦게 로딩하게 된다.


- data repetition
	- ngRepeat


orderBy ; 이름순대로 정렬이 가능하다. -음수를 줄 경우 리버스가 가능하다.

