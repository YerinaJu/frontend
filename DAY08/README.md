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

###css 상속
html에 직접 스타일을 넣는 경우 거의 최우선권을 가집니당
!important 제일 최우선권을 가집니다



* 접근성 관점

** 참고 https://www.w3.org/TR/selectors/#selectors
ctrl + d 같은 단어 찾기
ctrl + k 단어 스킵
ctrl+k+u 대문자를 소문자로
http://csslint.

