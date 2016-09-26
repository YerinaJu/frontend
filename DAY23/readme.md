#DAY27

## Sass 기본 문법

*주석*
* 싱글라인 
` // 주석내용` 으로 달면 된다. 하지만 css에는 출력이 되지 않는다.
> 어차피 같은 프로젝트 팀만 보는 내용이기 때문에 한 줄 주석을 사용하는 편이 더 좋다.
* 멀티라인 `/* 여러 줄 주석 */` 끝에 */는 생략이 가능하다. 그러나 여러 줄 주석의 경우에는 앞에 반드시 공백이 있어야 된다!
```
/*
 여러
 줄 
 주석
 공백
```

*호출*
.css,.scss,.sass파일을 @import를 사용하여 호출이 가능하다.
```
//Sass 파일의 경우, 언더바랑 확장자명 모두 생략이 가능하다. css의 경우에만 확장자를 명시해줘야 한다. 따옴표의 경우는 .sass 파일에서만 생략이 가능하다.
@import work.scss
@import work

//콤마를 통해 여러 파일을 불러들일 수 있다.
@import "work", "test.css"

// 미디어쿼리처럼 특정 기기나 해상도에서 불러들이는 것도 가능하다.
@import "work" screen

// 이외에도 외부 링크를 가져올 수도 있다.
@import "http://work.com"
@import url(work)
```

* 호출 제어
* scss나 sass 파일명 앞에 _언더스코어를 붙여주면 css로 컴파일되지 않는다.
* Sass에서는 호출 제어를 통해 각각의 역할을 분리하여 필요에 따라 재사용할 수 있는 모듈 관리가 가능하다.
```
@import "initialize/common"
@import "common/links"
@import "common/pagination"
@import "form/form-style"
```

* css는 import 구문이 상단에 위치해야 하지만, Sass의 경우는 문서 어디든 위치해도 상관이 없다.
* 해당 클래스나 아이디 등에 중첩으로 import를 사용한다면, import로 호출한 코드가 부모로 들어오게 된다. (extend는 선택자가 해당 요소로 올라가게 되는것 둘이 반대얌!)
```
<!-- ex1 -->
<!-- sass 파일  -->
_combobox.sass
_carousel.sass
_box.sass


#process-A
	@import _combobox.sass
	@import _carousel.sass

#prosess-B
	@import _box.sass

<!-- 컴파일 된 css 결과 -->
=> #process-A .combobox
	#process-A .carousel
	#process-B .box


<!-- ex2 -->
<!-- button.sass -->
.button
	$space: null !default 
	//!default는 초기변수 선언임! 사용자가 따로 재정의 하지 않으면 초기변수 값을 가지게 된다.
	$red: null !default
	padding: $space
	background :$red


<!-- review.scss -->
// 변수 값 재정의
$space: 22px;
$red: red;

@import "button";

.bul{
	$space: null;
	//지역변수로 null이라는 값을 다시 재정의 해주면, 초기변수 값으로 다시 돌아갑니다.
	width: 55%;
	@import "button";
}

<!-- review.css -->
.button{
	border:none;
	padding:22px;
	background:red;
}
// 재정의를 해준 값을 먹는다!
.bul{
	width:55%;
}
.bul .button{
	border:none;
	background:red;
	//.bul에 값을 null로 재정의를 해주면서, 초기 변수 값으로 돌아가게 되어 결국 해당 값은 출력되지 않는다.
}
```

### Sass 스크립트

*변수*
* Sass 변수 이름 작성 규칙
	- sass 변수는 변수 이름 앞에 $ 기호를 붙인다.
	- 변수 이름 사이에 공백을 사용하지 않으며, 음절과 음절 사이에 _언더스코어나 -하이픈을 사용한다.
	> 자바스크립트의 경우 - 하이픈을 사용할 수 없어 유의해야 한다!
	- 만약 프로그래밍에 익숙하여 camelCase 방식이 익숙하다면?
		=> 사용은 가능하나, 함수 이름에 사용되기 때문에 권장하지 않는다.
	- 변수 값은 자바스크립트처럼 따로 끌어올릴 수가 없기 때문에 항상 상위에 위치해야한다.

```
$my-nickname: 'Yerina'

body
	&::before,
	&::after
		content: $my_nickname

// 변수 이름에는 -를 사용하고 내용에는 _를 사용했지만 오류가 나지 않는다. Sass는 이 -와 _을 같은 것으로 처리하기 때문이다. 하지만 좋지 않은 습관이기에 절대로 쓰지 말아야 한다.
```

* !global ; 변수 뒤에 !global을 쓰면 지역변수도 전역변수처럼 사용이 가능하다
```
#main{
	$width: 30px !global
	/// !global이 없다면 위에 변수값이 선언되지 않았으니 오류가 발생한다. 하지만 !global로 전역변수임을 선언하였으므로 사용이 가능하다.
	width: $width
}
#section{
	width: $width;
}

=> #main{width:30px;}
	#section{width:30px}
```

*데이터유형*
* Null 없음
* Number 실수와 정수를 포함한 모든 숫자. 뒤에 px 등의 단위가 붙어있어도 숫자형으로 인식하여 연산이 가능하다.
* String&Color String은 문자형. Sass에서는 따옴표를 쓰지 않더라도 문자형으로 알아서 인식한다. color는 hex코드나 rgb 값 등을 의미하며, color 값도 연산이 가능하다.
```
"Noto-sans", Verdana
```
* Boolean true / false
* list 하나의 배열. border 값 처럼 여러개의 값이 공백으로 나뉘어 있다면, 배열로 인식한다.
* map 키와 속성값을 가지고 있는 하나의 묶음 객체




