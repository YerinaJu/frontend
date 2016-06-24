# 0624 DAY9 TIL

### CSS 선택자

요소 선택자 : E <br>
전체 선택자 : * <br>
자손 선택자 : E(P) E(C) <br>

요소 + 그루핑 + 아이디 + 전체 선택자
<!-- CSS 선택자는 여러 유형이 조합되어 사용된다. -->

> * 아이디 선택자
>	0100
> * .클래스 선택자
>	0010


* 전체선택자 
```
body *{
	margin:0;
}
```

* 그루핑 E,E,E
```
body, body *{
	margin:0;
}
```

* 자식 선택자 E(p) > E(C) ;
> 익스플로러 6과 7에서는 미지원되거나 버그가 있을 수도 있다.
```
#shopping1 > h4 {
	color:red;
}
```

* 클래스 선택자 E.class-name | .class-name | .class-name1.class-name2 | .class-name1 .class-name2
	- 일반적으로 사용되는 방법; 코드 재사용 목적
	```
	<style>
	p.notice{}
	/*p 안에 있는 notice만 적용이 된다. 디자인 컨셉[범위 제한]이 명확하지 않은 경우에는 사용을 자제.*/
	.notice{}
	.error{}
	</style>

	<body>
		<p>
			<span class="notice">notice</span>
		</p>
		<div class="notice">notice</div>
	</body>
	```
	- 멀티클래스
	```
	.class-name1.class-name2{}
	<!-- ex) 익스플로러 6버전에서는 앞 뒤 순서 바뀌는 게 적용이 되지 않습니다. -->
	.button{
		border:none;
		background-color:#000;
		color:#fff;
	}
	.buy{color:orange;}
	.cancel-buy{color:lime;}	
	/*emmet*/
	*****************
	.notice.show.me
	.notice>.show>.me
	*****************
	```

* 인접 형제 선택자 E + E
> 해당 요소의 바로 다음 요소만 선택할 수 있다.. 이전 요소는 선택이 불가능.
> 절대적으로 틀(프레임)이 무너지지 않아야 한다. (인접한 것만 해당이 되기 때문에 고정적인 틀에서 사용해야함.)
```
#shop1tabIndex ul { 
	border:1px solid red; 
}
#shop1tabIndex h4 + ul {
	border:1px solid blue;
}
/*emmet*/
******************
div+div+div
******************
```
* 일반 형제 선택자 E ~ E
```
<style>
	#shoppingGrpTab > #shopping1 + h3 {color:red;}
	#shoppingGrpTab > #shopping1 ~ h3 {color:blue;}
</style>
<body>
	<div id="shoppingGrpTab">
		<div id="#shopping1">
			<h3>안녕</h3>
			<h3>안녕</h3>
			<h3>안녕</h3>
		</div>
	</div>
</body>
```

* 속성 선택자 
```
[id] / [attr="value"]
/* ID 선택자 = 속성 선택자로 변경 */
[id] {border:4px dotted blue;}
/*모든 id라는 속성을 가진 요소를 찾아서 변경함*/
[class] {outline:3px solid rgba(255,255,0,0.5);}
/*모든 class라는 속성을 가진 요소를 찾아서 변경함*/
```
> 특정 ID 선택자를 찾고자 한다면?
> ` #shopping3 .screen_out {}`
> ```
> #shopping3 [class="screen_out"]{
>	border:10px solid orange;
> }
> ```
> 만약 `<class="screen_out name1">`이라는 요소에 `[class="screen_out"]`로 찾으면 못찾음. 무조건 screen_out과 클래스명이 일치해야함.
> 대신, 
> * ^ ; 클래스명이 처음에 오는 것과 일치할 때 ex). `[class^="screen_out"] / <class="screen_out name1 name2">`
> * $ ; 클래스명이 마지막에 오는 것과 일치할 때 ex). `[class$="screen_out"] / <class="name1 name2 screen_out">`
> * 파일명 찾기도 가능합니다
> `[class$=".psd"]` 로 쓰면 .psd 확장자의 모든 파일을 찾을 수 있다.

### reset class

*초기화
`body *{margin:0;}`
<!-- 모든 요소를 초기화 시키면 여러 문제가 생길 수 있다. -->
=> `body, #shoppingGrpTab *{margin:0;}`
```
.reset-list ul,.reset-list ol{
	list-style-type:none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
}
```
.demo와 .lecture한테 똑같은 스타일을 주고 싶을 때 효율적으로 다른 모듈을 만들어서 클래스를 추가한다.
주로 reset class는 부모 요소한테 주고 자식요소들에게 공통으로 적용시키게 한다.
```
.lecture
.lecture ul,.demo ul{ 
	/* 기본적인 리스트 스타일 초기화
	ul에게 상속 받으니 li에 할 필요가 없음.
	정말 자주 사용되는 코드!!! * /
	list-style-type:none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
}
```


### etc
> color:transparent란 값은 배경을 투명하게 하는 것.
> rgba값 ; red/green/blue/alpha 값. alpha값은 투명도(opacity)입니다. 최소 0 ~ 최대 255까지


> /* 주석을 남길 때 저작권에 관한 내용은 주석 앞에 !을 남긴다. */
> /* ! selectors.css c yamoo9.net, 2016 */
 
> * 요소의 box상태 obsetbox - marginbox - borderbox - paddingbox - contentbox

> * css 기본 규칙 같은 값이 중복되면 아래 선언된 게 적용된다.

> * 모든 제목은 위 아래 margin값을 가진다.

> * em(equal M) 단위의 크기는 부모 요소에 `상대적`으로 변경된다. 만약 부모의 폰트 사이즈가 14px면 1em의 크기는 14px가 된다.. (기기에 따라 고정 값이 다름)
> ```
> body{
> 	font-size: 16px;
>	/*고정 값인 px을 상대 값으로 변경하고자 한다면?*/
>	font-size: 1.25em; 
> }  
> => 최종 font-size:20px;
> ```
