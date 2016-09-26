#day 26

* git bash 명령어
cd ~ ; 폴더 바로가기
mkdir ; make directory
ls ;목록을 출력
ls -1 ; 목록을 수직 방향으로 출력 (-1은 옵션)
cli+tap키 
rm 파일 지우기
rmdir 빈 폴더 지우기
rm -rf 폴더이름; 폴더에 파일이 있을 경우 지울 수 있음 (-rf 하위모든것을 찾아내서 강제적으로)
mv 파일 이동시키기 
touch 빈 파일 생성
echo "내용" 내용을 추가 시키고 파일 생성
cat 내용 확인
cp 복제
cls 화면 내용 지우기


## Sass

###기본
*기본*
* ruby를 기반으로 만들어진 css 확장 언어. libsass는 c/c++로 만들어졌기 때문에 ruby 기반보다 속도가 더 빠르다!
* css와 달리, Sass는 전처리 방식(웹 브라우저가 아닌 컴퓨터가 직접 해석하여 로딩이 빠르다.)을 사용한다.
* 기능적으로는 중첩, 변수 믹스인(코드 합치기), 선택자 그룹핑 등이 가능하다.
* Sass는 .sass파일과 .scss파일로 확장자명이 나뉜다. 이 둘은 중괄호와 세미콜론을 쓰냐 안쓰냐로 달라지고, 그 밖에도 조금씩 다르지만 기본적으로 사용하는 기능은 똑같음!

*파일변환*
* 명령어를 통해 실행이 가능하다. 
	- node-sass 라는 명령어로 sass를 실행한다.
* sass 파일을 css 파일로 컴파일 시키기
```node-sass sass/start.sass css/start.css```
> sass 폴더 안 start.sass 파일을 css 폴더 안 start.css 파일로 컴파일 시켜라!
* output style을 지정 할수도 있다. 
`--output-style compact/compressed/extended(우리가 쓰는 가장 기본적인 방식)/nested
* 컴파일 시킬 때 -w (watch)를 넣어주면 저장하는 즉시 컴파일이 되면서 화면에 실시간으로 보여주게 된다.

 
###문법
*주석*
```
// Sass의 한 줄 주석
// Sass 내 파일에서만 확인이 가능하며, css 파일로 옮겨질 경우엔 사라진다.
// 팀끼리 공유할 때 사용하면 좋다.

/* 여러 줄 주석 */
/* 기본 주석은 css처럼 똑같이 사용한다. */
/* 그러나 사용 시 주의할 점은,
 .sass 파일의 경우엔 반드시 주석 내 내용 앞에 하나 이상의 공백이 존재해야 한다.
 또한, 끝날 때 */ 가 생략되어도 괜찮다
 그러나 .scss는 상관이 없으며, */ 생략이 불가능하다.
 */
```

*중첩* / *& 부모 참조 선택자*
* 중첩은 부모 선택자 내부에 자식 선택자를 포함하는 구조 형태로 작성이 가능하다.
* &는 중첩된 구조 내에서 부모를 참조하는 선택자이며, 내 자신을 기준으로 내 부모인 선택자를 끌고오게 된다.
```
a
	color: red
	&:hover
		color: blue

==> a{color:red;}
	a:hover{color:blue;}
```
> &:hover 앞에 상위에 속한 클래스를 붙여줘서 특정한 클래스를 가진 애들만 사용이 가능하게도 가능하다.
> & 뒤에 선택자 이름 형태로 붙게 될 경우에는, 중첩된 요소의 하위가 아닌 완전 다른 개별적인 모듈로 확장되는 것으로 가늠! 

*속기*
* 속기형 사용도 가능하며, 속기형으로 작성한 곳 아래에도 네임스페이스를 따로 가질 수 있다.
```
<!-- ex1. -->
font: 1rem/1.5 "Spoca Han Sans", sans-serif
	weight: 200
	variant: small-caps

<!-- ex2. -->
margin: 20px 0 10px
	left: 40px
```
*미디어쿼리와 중첩*
* 요소 안에 중첩으로 미디어쿼리 구문을 넣으면 미디어쿼리 내에 요소가 들어간 것처럼 사용이 가능하다.
* 미디어쿼리가 이리저리 난무하는 것이 보기 싫다면 미디어쿼리를 결합시킬 수도 있다
```
aside.page-sidebar
	float: left
	width: 100%
	@media (min-width: 600px)
		width: 45%
	@media (min-width: 1100px)
		width: 33.33333%

==> aside.page-sidebar {
  float: left;
  width: 100%;
}

@media (min-width: 600px) {
  aside.page-sidebar {
    width: 45%;
  }
}

@media (min-width: 1100px) {
  aside.page-sidebar {
    width: 33.33333%;
  }
}
```

*선택자상속*
* 대체 선택자 상속을 통해 css를 모듈화 시킬 수 있다.
* %를 통해 클래스를 대신하여 값을 저장시켜둔 후, @extend를 통해 저장된 값을 호출하여 실체화 시킨다.
```
%btn
	width: 40px
	height: 40px

button
	@extend %btn
	@extend %box !optional
// !optional은 해당 대체 선택자가 정의되지 않았을 경우 발생하는 오류를 무시하고 넘어가라는 명령이다.

==> button{width:40px;height:40px}
```

*@import*
* 다른 외부 Sass파일을 참조하여 불러오는 기능을 한다.
* css와는 다르게 호출을 요청하고 끝나는 것이 아니라 호출한 파일을 서로 결합을 시킨다.
> Sass는 전처리 방식을 사용하기 때문에 @import를 사용해도 처리 속도가 느리지 않다.
* 아주 잘게 모듈화가 가능하기에 유지보수 측면에서 관리가 용이하다.
서로 참조하여 불러오고 불러오고 불러오고 불러와서 아주 잘게 모듈화가 가능합니다.
* 호출 시, Sass의 확장자명인 .sass와 .scss는 생략이 가능하나 .css의 파일은 확장자명은 반드시 명시해주어야 한다.
* 또한, css의 경우 @import는 문서 위에 선언해야 하지만 Sass를 호출하고 결합시키는 @import의 경우 문서 어디에 오더라도 상관없다.
```
@import main, header, footer, container.css
.button-error
	@import navi
	background: #f00
	color: #fff
```

*sourcemap*
* 소스의 지도. 소스코드가 어디에 위치해 있는지 알려주는 기능을 한다.
* 병합된 소스의 맵 파일로 디버깅 목적으로 사용됩니다.
* node-sass로 css 파일로 컴파일을 할 때 `--source-map map`을 적어주면 해당 폴더에 맵 파일이 형성된다.

*변수*
* $변수이름 을 사용하여 변수를 지정해 줄 수 있다.
* 변수에 지정해둔 값으로 연산도 가능하다.


