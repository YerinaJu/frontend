# 선택자 정리표

선택자 | 설명
 --- | ---
**일반 선택자** |
 E | 요소 선택자
 * | 전체 선택자
 E(P) E(C) | 자손 선택자
 E(P) > E(C) | 자식 선택자
 E + E | 인접 형제 선택자
 E ~ E | 일반 형제 선택자
**클래스 선택자**|		
 E.class | 요소 E와 .class가 전부 일치 하는 경우.
 .class | .class가 일치하는 경우
 .class-name1.class-name2 | 멀티 클래스, classname1과 classname2가 모두 일치 하는 경우
 .class-name1 .class-name2 | .class-name1 안에 .class-name2가 있는 경우
**속성 선택자** |		
 [attr] | 속성이 일치하는 경우.
 [attr="value"] | 속성과 값이 일치하는 경우.
 [attr~="value"] | 속성 값에 공백으로 구분되는 단어가 일치하는 경우.
 [attr^="value"] | 속성 값 처음 시작부분이 일치하는 경우.
 [attr$="value"] | 속성 값 마지막 끝나는 부분이 일치하는 경우.
 [lang|="en"] | 속성 값에 (-)하이픈으로 구분되는 단어가 일치하는 경우
 [attr*="value"] | 속성 값이 들어가는 모든 경우.
**가상 클래스 선택자** |		
 E:root | E 요소의 root가 되는 요소를 찾음. (HTML) 
 E:first-child | E 요소의 상위 부모 요소의 자식 중 첫번째 요소
 E:last-child | E 요소의 상위 부모 요소의 자식 중 마지막 요소
 E:nth-child(n) | E 요소가 속한 자식 요소들 중에 n번째를 나타냄.
 E:nth-last-child(n) | E 요소가 속한 자식 요소들 중에 마지막에서 n번째를 나타냄.
 E:only-child | E 요소의 상위 부모 요소의 자식 중 오직 하나만 있는 요소
 E:first-of-type | E 요소의 상위 부모 요소의 자식 중 종류별 첫번째 요소
 E:last-of-type | E 요소의 상위 부모 요소의 자식 중 종류별 마지막 요소
 E:nth-of-type(n) | E 요소의 상위 부모 요소의 자식 중 종류별 n번째 요소
 E:nth-last-of-type | E 요소의 상위 부모 요소의 자식 중 종류별로 끝에서 n번째 요소
 E:only-of-type | E 요소의 상위 부모 요소의 자식 중 오직 종류별 하나만 있는 요소
 E:not(selector) | E 요소의 상위 부모 요소의 자식 중 () 안 selector를 제외한 나머지 요소
 E:empty | E 요소의 상위 부모 요소의 자식 중 비어 있는 요소.
상태 디자인 클래스 | E:link | a 요소의 링크 상태.
 E:visited | a 요소 링크에 방문했을 경우.
 E:hover | 요소에 마우스를 올릴 경우.
 E:active | 요소에 커서를 갖다대 눌렀을 경우.
 E:focus | 요소에 tab을 이용해 접근했을 경우.
**가상 요소** |		
 E::before | E 요소의 하위 요소들 중 가장 첫번째에 입력.
 E::after | E 요소의 하위 요소들 중 가장 마지막에 입력.
 E::first-line | E 요소의 가장 첫번째 줄의 경우.
 E::first-letter | E 요소의 가장 첫번째 글자의 경우.
 E:lang(language) | 요소의 lang 속성을 찾을 경우.
 E::target | url에 #id 값이 입력됐을 경우.

# CSS 선택자 정리


### CSS 선택자
/* 요소 + 그루핑 + 아이디 + 전체 선택자
CSS 선택자는 여러 유형이 조합되어 사용됩니다  */
```
요소 선택자 E
전체 선택자 *
자손 선택자 E(P) E(C) 
```
> * 아이디 선택자
>	0100
> * .클래스 선택자
>	0010


* 전체선택자 *
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
> 익스플로러 6과 7에서는 미지원되거나 버그가 있을 수 있습니다
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
	/*p 안에 있는 notice만 적용이 됩니다. 디자인 컨셉[범위 제한]이 명확하지 않은 경우에는 사용을 자제.*/
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
	/*ex) 익스플로러 6버전에서는 앞 뒤 순서 바뀌는 게 적용이 되지 않습니다.*/
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
> 해당 요소의 바로 다음 요소만 선택할 수 있습니다. 이전 요소는 선택이 불가능합니다.
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


###속성 선택자 ; 속성의 순서까지 맞아야 적용이 됩니다.
```
[attr]
[attr="value"]
[atrr|="value"]
<!-- -(하이픈)로 구분되는 경우를 찾아 쓴다. -->
[attr~="value"]
<!-- 공백으로 구분되는 경우를 찾아 쓴다. 모든 value 가 들어가는 속성 값을 찾는다. -->
[attr*="value"]
<!-- value가 들어가는 모든 경우를 찾아준다. -->
```
```
[class~="container"]{
	border:1px dashed #cacaca;
	padding-left:40px;
}
[class~="nation"]{
	text-decoration:underline;
}

<!-- "~=" 공백으로 구분되는 단어가 일치할 때 선택한다. -->

[lang|="en"]{
	font-size:20px;
	color:blue;
}
<!-- "|=" 하이픈으로 구분되는 단어가 일치할 때 선택 -->
```
> 속성 선택자는 값의 순서와 정확도가 중요하다!


###상태 디자인 선택자
* 기본 상태
```
p{
	color:#84888a;
}
```
* 마우스가 올라간 상태 (hover)
```
/* Pseudo CLass: 가상(유사, 의사) 클래스 / 요소 뒤에 :가 들어가면 가상 클래스를 의미합니다. */
>/*가상클래스를 1개이상 조합도 가능합니다*/
p:hover{
	color:#0c0d0d;
}
```
* 커서로 누른 상태(active)
```
p:active{
	background-color:orange;
}
```
* 방문한 상태 ; 사용자가 방문한 경로를 표시할 수 있다.
visited의 스타일 지정은 'color' 관련만 가능합니다.
```
a:visited{
	background-image:url(../images/external.png);
	background-repeat:no-repeat;
	background-position:0 4px;
	background-color: orange;
}
```
* 키보드 포커싱 상태
```
a:focus{
	outline:3px solid #fc414b;
	/*화면 상태 표시*/
	/*outline ; border는 좌표값때문에 움직이지만,아웃라인은 고정된 테두리입니당*/
}
```





### 가상(유사, 의사) 클래스 ; pseudo class
> 가상클래스는 앞에 *가 생략되어 있음.

* :first-child 
* :last-child 
* :nth-child 
요소랑 순서를 동시에 만족해야 적용됨.
* :lang ; lang속성을 찾을 때!
> ex) :lang(en) => (= [lang|="en"])
* :nth-of-child ; 자식 종류별로 분류 가능
* :only-child ; 오직 한가지만 있는 자식만
* :target
<!-- tab only css 참고 -->
* enabled/disabled/checked =>form에서만
:not ; ()요소 빼고 적용된다. 1개 이상 적용도 가능!
```
.parent *:not(a):not(div){
	border:1px solid #b64926;
}
```


### 가상(유사, 의사) 요소 ; 가상으로 요소(컨텐츠)를 만들어 줍니다.
> css2에서는 ':'로도 쓰지만, 3버전이 되면서 ::두개로 바꼈음
> focus가 먹지 않고 텍스트는 이미지로 먹힙니다. 스크린리더에서 안 읽혀요!ㅠ

* ::first-line ; :first-line
* ::first-letter ; :first-letter
* ::before ; :before
* ::after ; :after
> before나 after 속성은 반드시 content와 같이 와야 합니다. 기본 속성은 inline이라서 display:block;을 많이 씁니다.
